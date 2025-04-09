import Papa from 'papaparse';



export const processCSV = (file) => {
  return new Promise((resolve, reject) => {
    Papa.parse(file, {
      header: true,
      dynamicTyping: true,  
      skipEmptyLines: true,
      complete: (results) => {
        if (results.errors.length) {
          reject(new Error(`Error parsing CSV: ${results.errors[0].message}`));
          return;
        }
        
        
        const requiredColumns = [
          'Country', 
          'Field', 
          'Substream', 
          'Job Vacancies', 
          'Growth Rate (%)', 
          'Average Salary (USD)', 
          'Skill Demand Score'
        ];
        
        const headers = Object.keys(results.data[0] || {});
        const missingColumns = requiredColumns.filter(col => !headers.includes(col));
        
        if (missingColumns.length > 0) {
          reject(new Error(`Missing required columns: ${missingColumns.join(', ')}`));
          return;
        }
        
        
        const cleanedData = results.data.map(row => {
          
          return {
            Country: String(row.Country || ''),
            Field: String(row.Field || ''),
            Substream: String(row.Substream || ''),
            'Job Vacancies': parseInt(row['Job Vacancies'] || 0),
            'Growth Rate (%)': parseFloat(row['Growth Rate (%)'] || 0),
            'Average Salary (USD)': parseFloat(row['Average Salary (USD)'] || 0),
            'Skill Demand Score': parseFloat(row['Skill Demand Score'] || 0)
          };
        });
        
        
        const validData = cleanedData.filter(row => 
          row.Country && 
          row.Field && 
          row.Substream
        );
        
        if (validData.length === 0) {
          reject(new Error('No valid data found in the CSV file'));
          return;
        }
        
        console.log(`Processed ${validData.length} valid rows of data`);
        resolve(validData);
      },
      error: (error) => {
        reject(new Error(`Error reading file: ${error.message}`));
      }
    });
  });
};


export const calculateOpportunityScore = (entry, maxValues) => {
  return (
    0.3 * (entry['Growth Rate (%)'] / maxValues.growth) +
    0.4 * (entry['Average Salary (USD)'] / maxValues.salary) +
    0.3 * (entry['Skill Demand Score'] / maxValues.demand)
  );
};


export const groupDataBy = (data, field, metrics = ['Job Vacancies', 'Growth Rate (%)', 'Average Salary (USD)', 'Skill Demand Score']) => {
  const grouped = {};
  
  data.forEach(item => {
    const key = item[field];
    if (!grouped[key]) {
      grouped[key] = {
        [field.toLowerCase()]: key,
        count: 0
      };
      
      metrics.forEach(metric => {
        grouped[key][metric.toLowerCase().replace(/\s/g, '_').replace(/[()%]/g, '')] = 0;
      });
    }
    
    grouped[key].count += 1;
    
    metrics.forEach(metric => {
      const metricKey = metric.toLowerCase().replace(/\s/g, '_').replace(/[()%]/g, '');
      if (metric === 'Job Vacancies') {
        grouped[key][metricKey] += (item[metric] || 0);
      } else {
        
        grouped[key][metricKey] += (item[metric] || 0);
      }
    });
  });
  
 
  Object.values(grouped).forEach(group => {
    metrics.forEach(metric => {
      const metricKey = metric.toLowerCase().replace(/\s/g, '_').replace(/[()%]/g, '');
      if (metric !== 'Job Vacancies') {
        group[metricKey] = group[metricKey] / group.count;
      }
    });
  });
  
  return Object.values(grouped);
};


export const findTopPerformers = (data, metric, count = 10) => {
  return [...data].sort((a, b) => b[metric] - a[metric]).slice(0, count);
};


export const calculateDistribution = (data, groupField, valueField) => {
  const grouped = groupDataBy(data, groupField, [valueField]);
  const total = grouped.reduce((sum, item) => sum + item[valueField.toLowerCase().replace(/\s/g, '_').replace(/[()%]/g, '')], 0);
  
  return grouped.map(item => ({
    name: item[groupField.toLowerCase()],
    value: item[valueField.toLowerCase().replace(/\s/g, '_').replace(/[()%]/g, '')],
    percentage: ((item[valueField.toLowerCase().replace(/\s/g, '_').replace(/[()%]/g, '')] / total) * 100).toFixed(1)
  }));
};


export const getUniqueValues = (data, field) => {
  return [...new Set(data.map(item => item[field]))];
};


export const filterData = (data, filters) => {
  return data.filter(item => {
    for (const [key, value] of Object.entries(filters)) {
      if (item[key] !== value) {
        return false;
      }
    }
    return true;
  });
};