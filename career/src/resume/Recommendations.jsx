function Recommendations({ missingSkills, improvementSuggestions }) {
  return (
    <div className="flex flex-col md:flex-row md:gap-4">
      <div className="w-full md:w-1/2 mb-4">
        <div className="border rounded-lg shadow-sm h-full">
          <div className="bg-gray-100 p-4 border-b">
            <h5 className="font-medium text-lg m-0">Missing Skills</h5>
          </div>
          <div className="p-4">
            {missingSkills && missingSkills.length > 0 ? (
              typeof missingSkills === 'string' ? (
                <p>{missingSkills}</p>
              ) : (
                <ul className="divide-y">
                  {missingSkills.map((skill, index) => (
                    <li key={index} className="py-2 px-1">{skill}</li>
                  ))}
                </ul>
              )
            ) : (
              <p className="text-gray-500">No missing skills identified</p>
            )}
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 mb-4">
        <div className="border rounded-lg shadow-sm h-full">
          <div className="bg-gray-100 p-4 border-b">
            <h5 className="font-medium text-lg m-0">Improvement Suggestions</h5>
          </div>
          <div className="p-4">
            {improvementSuggestions && improvementSuggestions.length > 0 ? (
              typeof improvementSuggestions === 'string' ? (
                <p>{improvementSuggestions}</p>
              ) : (
                <ul className="divide-y">
                  {improvementSuggestions.map((suggestion, index) => (
                    <li key={index} className="py-2 px-1">{suggestion}</li>
                  ))}
                </ul>
              )
            ) : (
              <p className="text-gray-500">No improvement suggestions provided</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recommendations;