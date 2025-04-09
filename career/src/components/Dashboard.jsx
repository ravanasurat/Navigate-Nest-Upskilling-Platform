import React, { useState, useEffect } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  ScatterChart, Scatter, ZAxis, LineChart, Line, PieChart, Pie, Cell
} from 'recharts';

const Dashboard = ({ onDataProcessed = () => {}, setLoading = () => {}, setError = () => {} }) => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedField, setSelectedField] = useState(null);
  const [countries, setCountries] = useState([]);
  const [fields, setFields] = useState([]);
  
  const [substreams, setSubstreams] = useState([]);
  const [currentView, setCurrentView] = useState('loading'); 
  const [aggregatedData, setAggregatedData] = useState({
    countries: [],
    fields: [],
    substreams: [],
    opportunities: []
  });
  const [data, setData] = useState(null);
  const [internalError, setInternalError] = useState(null);
  
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d', '#ffc658', '#8dd1e1', '#a4de6c', '#d0ed57'];

  
  
  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        setInternalError(null);
        setError(null); 
        
        fetch('http://localhost:3000/api/labor-data')
          .then(response => {
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
          })
          .then(data => {
            setData(data);
            onDataProcessed(data);
            prepareData(data);
            setCurrentView('countries');
          })
          .catch(err => {
            const errorMsg = 'Error loading data: ' + err.message;
            setInternalError(errorMsg);
            setError(errorMsg); 
          })
          .finally(() => {
            setLoading(false);
          });
          
      } catch (err) {
        const errorMsg = 'Error loading data: ' + err.message;
        setInternalError(errorMsg);
        setError(errorMsg); 
        setLoading(false);
      }
    };
    
    loadData();
  }, []);

  useEffect(() => {
    if (data) {
      prepareData(data);
      setCurrentView('countries');
    }
  }, [data]);

  useEffect(() => {
    if (selectedCountry && data) {
      const countryData = data.filter(item => item.Country === selectedCountry);
      const uniqueFields = [...new Set(countryData.map(item => item.Field))];
      setFields(uniqueFields);
      setCurrentView('fields');
    }
  }, [selectedCountry, data]);

  useEffect(() => {
    if (selectedCountry && selectedField && data) {
      const filteredData = data.filter(
        item => item.Country === selectedCountry && item.Field === selectedField
      );
      const uniqueSubstreams = [...new Set(filteredData.map(item => item.Substream))];
      setSubstreams(uniqueSubstreams);
      setCurrentView('substreams');
    }
  }, [selectedCountry, selectedField, data]);

  const prepareData = (dataSet) => {
    
    const countryAgg = {};
    dataSet.forEach(item => {
      const country = item.Country;
      if (!countryAgg[country]) {
        countryAgg[country] = {
          country,
          vacancies: 0,
          growth: 0,
          salary: 0,
          demand: 0,
          count: 0
        };
      }
      
      countryAgg[country].vacancies += parseInt(item['Job Vacancies'] || 0);
      countryAgg[country].growth += parseFloat(item['Growth Rate (%)'] || 0);
      countryAgg[country].salary += parseFloat(item['Average Salary (USD)'] || 0);
      countryAgg[country].demand += parseFloat(item['Skill Demand Score'] || 0);
      countryAgg[country].count += 1;
    });

    
    Object.values(countryAgg).forEach(country => {
      country.growth = country.growth / country.count;
      country.salary = country.salary / country.count;
      country.demand = country.demand / country.count;
    });

    const countriesData = Object.values(countryAgg).sort((a, b) => b.vacancies - a.vacancies);
    setCountries(countriesData.map(c => c.country));
    
    const opportunityData = dataSet.map(item => {
      const growthMax = Math.max(...dataSet.map(d => parseFloat(d['Growth Rate (%)'] || 0)));
      const salaryMax = Math.max(...dataSet.map(d => parseFloat(d['Average Salary (USD)'] || 0)));
      const demandMax = Math.max(...dataSet.map(d => parseFloat(d['Skill Demand Score'] || 0)));
      
      const opportunityScore = (
        0.3 * parseFloat(item['Growth Rate (%)'] || 0) / growthMax +
        0.4 * parseFloat(item['Average Salary (USD)'] || 0) / salaryMax +
        0.3 * parseFloat(item['Skill Demand Score'] || 0) / demandMax
      );
      
      return {
        ...item,
        opportunityScore
      };
    }).sort((a, b) => b.opportunityScore - a.opportunityScore).slice(0, 20);

    setAggregatedData({
      countries: countriesData,
      opportunities: opportunityData
    });
  };

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setSelectedField(null);
  };

  const handleFieldSelect = (field) => {
    setSelectedField(field);
  };

  const handleReset = () => {
    setSelectedCountry(null);
    setSelectedField(null);
    setCurrentView('countries');
  };

  const goBack = () => {
    if (currentView === 'substreams') {
      setSelectedField(null);
      setCurrentView('fields');
    } else if (currentView === 'fields') {
      setSelectedCountry(null);
      setCurrentView('countries');
    }
  };

  const renderLoadingView = () => (
    <div className="flex flex-col items-center justify-center h-96 bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-2xl font-bold mb-6">Loading Labor Market Data</h2>
      <p className="text-gray-600 mb-6">
        Loading Current Job Data Across World 
      </p>
      <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      {internalError && <p className="text-red-500 mt-4">{internalError}</p>}
    </div>
  );

  const renderCountriesView = () => (
    <div>
      {internalError && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4" role="alert">
        <p>{internalError}</p>
      </div>}
      
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Labor Market Dashboard</h2>
      </div>
      
      <h2 className="text-2xl font-bold mb-4">Select a Country to Explore</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
        {countries.map(country => (
          <div 
            key={country}
            className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow cursor-pointer border-2 border-transparent hover:border-blue-500"
            onClick={() => handleCountrySelect(country)}
          >
            <h3 className="text-lg font-semibold text-center">{country}</h3>
          </div>
        ))}
      </div>
      
      <h2 className="text-2xl font-bold mb-6">Countries Overview</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Job Vacancies by Country</h3>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={aggregatedData.countries}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="country" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="vacancies" name="Job Vacancies" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Average Growth Rate by Country</h3>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={aggregatedData.countries}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="country" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="growth" name="Growth Rate (%)" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Average Salary by Country</h3>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={aggregatedData.countries}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="country" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="salary" name="Average Salary (USD)" fill="#ffc658" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Average Skill Demand by Country</h3>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={aggregatedData.countries}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="country" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="demand" name="Skill Demand Score" fill="#ff8042" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      <div className="bg-white p-4 rounded-lg shadow-lg mb-8">
        <h3 className="text-xl font-semibold mb-4">Top Market Opportunities</h3>
        <ResponsiveContainer width="100%" height={400}>
          <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
            <CartesianGrid />
            <XAxis type="number" dataKey="Growth Rate (%)" name="Growth Rate" />
            <YAxis type="number" dataKey="Average Salary (USD)" name="Salary" />
            <ZAxis type="number" dataKey="Job Vacancies" range={[50, 500]} name="Vacancies" />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
            <Legend />
            <Scatter 
              name="Market Opportunities" 
              data={aggregatedData.opportunities} 
              fill="#8884d8" 
              shape="circle"
            />
          </ScatterChart>
        </ResponsiveContainer>
      </div>
    </div>
  );

  const renderFieldsView = () => {
    if (!selectedCountry || !data) return null;

    const countryData = data.filter(item => item.Country === selectedCountry);
    
    
    const fieldAgg = {};
    countryData.forEach(item => {
      const field = item.Field;
      if (!fieldAgg[field]) {
        fieldAgg[field] = {
          field,
          vacancies: 0,
          growth: 0,
          salary: 0,
          demand: 0,
          count: 0
        };
      }
      
      fieldAgg[field].vacancies += parseInt(item['Job Vacancies'] || 0);
      fieldAgg[field].growth += parseFloat(item['Growth Rate (%)'] || 0);
      fieldAgg[field].salary += parseFloat(item['Average Salary (USD)'] || 0);
      fieldAgg[field].demand += parseFloat(item['Skill Demand Score'] || 0);
      fieldAgg[field].count += 1;
    });

    // Calculate averages
    Object.values(fieldAgg).forEach(field => {
      field.growth = field.growth / field.count;
      field.salary = field.salary / field.count;
      field.demand = field.demand / field.count;
    });

    const fieldsData = Object.values(fieldAgg).sort((a, b) => b.vacancies - a.vacancies);

    
    const totalVacancies = fieldsData.reduce((sum, field) => sum + field.vacancies, 0);
    const fieldDistribution = fieldsData.map(field => ({
      name: field.field,
      value: field.vacancies,
      percentage: ((field.vacancies / totalVacancies) * 100).toFixed(1)
    }));

    return (
      <div>
        {internalError && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4" role="alert">
          <p>{internalError}</p>
        </div>}
        
        <div className="flex justify-between items-center mb-6">
          <div>
            <button 
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-lg mr-2"
              onClick={goBack}
            >
              Back
            </button>
            <button 
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-lg"
              onClick={handleReset}
            >
              Reset
            </button>
          </div>
          <h2 className="text-2xl font-bold text-center flex-grow">{selectedCountry}</h2>
          <div></div> 
        </div>

        <h2 className="text-2xl font-bold mb-4">Select a Field to Explore</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
          {fields.map(field => (
            <div 
              key={field}
              className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow cursor-pointer border-2 border-transparent hover:border-blue-500"
              onClick={() => handleFieldSelect(field)}
            >
              <h3 className="text-lg font-semibold text-center">{field}</h3>
            </div>
          ))}
        </div>
        
        <h2 className="text-2xl font-bold mb-6">Fields Overview</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Job Vacancies by Field</h3>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={fieldsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="field" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="vacancies" name="Job Vacancies" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Field Distribution</h3>
            <ResponsiveContainer width="100%" height={400}>
              <PieChart>
                <Pie
                  data={fieldDistribution}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={120}
                  fill="#8884d8"
                  label={({name, percentage}) => `${name}: ${percentage}%`}
                >
                  {fieldDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => new Intl.NumberFormat().format(value)} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Growth Rate by Field</h3>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={fieldsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="field" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="growth" name="Growth Rate (%)" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Average Salary by Field</h3>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={fieldsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="field" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="salary" name="Average Salary (USD)" fill="#ffc658" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    );
  };

  const renderSubstreamsView = () => {
    if (!selectedCountry || !selectedField || !data) return null;

    const filteredData = data.filter(
      item => item.Country === selectedCountry && item.Field === selectedField
    );
    
    const substreamAgg = {};
    filteredData.forEach(item => {
      const substream = item.Substream;
      if (!substreamAgg[substream]) {
        substreamAgg[substream] = {
          substream,
          vacancies: parseInt(item['Job Vacancies'] || 0),
          growth: parseFloat(item['Growth Rate (%)'] || 0),
          salary: parseFloat(item['Average Salary (USD)'] || 0),
          demand: parseFloat(item['Skill Demand Score'] || 0)
        };
      } else {
        substreamAgg[substream].vacancies += parseInt(item['Job Vacancies'] || 0);
        substreamAgg[substream].growth = parseFloat(item['Growth Rate (%)'] || 0);
        substreamAgg[substream].salary = parseFloat(item['Average Salary (USD)'] || 0);
        substreamAgg[substream].demand = parseFloat(item['Skill Demand Score'] || 0);
      }
    });

    const substreamsData = Object.values(substreamAgg).sort((a, b) => b.vacancies - a.vacancies);

    
    substreamsData.forEach(item => {
      const growthMax = Math.max(...substreamsData.map(d => d.growth));
      const salaryMax = Math.max(...substreamsData.map(d => d.salary));
      const demandMax = Math.max(...substreamsData.map(d => d.demand));
      
      item.opportunityScore = (
        0.3 * item.growth / (growthMax || 1) +
        0.4 * item.salary / (salaryMax || 1) +
        0.3 * item.demand / (demandMax || 1)
      );
    });

    
    const opportunityRanking = [...substreamsData].sort((a, b) => b.opportunityScore - a.opportunityScore);

    return (
      <div>
        {internalError && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4" role="alert">
          <p>{internalError}</p>
        </div>}
        
        <div className="flex justify-between items-center mb-6">
          <div>
            <button 
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-lg mr-2"
              onClick={goBack}
            >
              Back
            </button>
            <button 
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-lg"
              onClick={handleReset}
            >
              Reset
            </button>
          </div>
          <h2 className="text-2xl font-bold text-center flex-grow">
            {selectedCountry}: {selectedField}
          </h2>
          <div></div> 
        </div>

        <h2 className="text-2xl font-bold mb-6">Substreams Overview</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Job Vacancies by Substream</h3>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={substreamsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="substream" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="vacancies" name="Job Vacancies" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Growth Rate by Substream</h3>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={substreamsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="substream" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="growth" name="Growth Rate (%)" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Average Salary by Substream</h3>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={substreamsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="substream" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="salary" name="Average Salary (USD)" fill="#ffc658" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Skill Demand by Substream</h3>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={substreamsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="substream" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="demand" name="Skill Demand Score" fill="#ff8042" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-lg mb-8">
          <h3 className="text-xl font-semibold mb-4">Opportunity Score Ranking</h3>
          <p className="mb-4 text-gray-600">
            Opportunity score is calculated based on growth rate (30%), average salary (40%), and skill demand (30%).
          </p>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={opportunityRanking}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="substream" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="opportunityScore" name="Opportunity Score" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-lg mb-8">
          <h3 className="text-xl font-semibold mb-4">Combined Metrics Comparison</h3>
          <ResponsiveContainer width="100%" height={500}>
            <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
              <CartesianGrid />
              <XAxis type="number" dataKey="growth" name="Growth Rate" />
              <YAxis type="number" dataKey="salary" name="Salary" />
              <ZAxis type="number" dataKey="demand" range={[40, 400]} name="Demand" />
              <Tooltip cursor={{ strokeDasharray: '3 3' }} 
                formatter={(value, name) => [new Intl.NumberFormat().format(value), name]} />
              <Legend />
              <Scatter 
                name="Substreams" 
                data={substreamsData} 
                fill="#8884d8" 
                shape="circle"
              >
                {substreamsData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Scatter>
            </ScatterChart>
          </ResponsiveContainer>
          <div className="mt-4">
            <p className="text-gray-600">
              Size of circles represents skill demand score. Hover over points to see details.
            </p>
          </div>
        </div>
      </div>
    );
  };

  const renderContent = () => {
    switch (currentView) {
      case 'loading':
        return renderLoadingView();
      case 'countries':
        return renderCountriesView();
      case 'fields':
        return renderFieldsView();
      case 'substreams':
        return renderSubstreamsView();
      default:
        return renderLoadingView();
    }
  };

  return (
    <div className="bg-gray-100 p-6 rounded-lg">
      {renderContent()}
    </div>
  );
};

export default Dashboard;