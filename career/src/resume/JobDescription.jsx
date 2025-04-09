function JobDescription({ jobDescription, domain }) {
  return (
    <div className="border rounded-lg shadow-sm overflow-hidden">
      <div className="bg-gray-100 p-4 border-b">
        <h5 className="font-medium text-lg m-0">Standard Job Description: {domain || 'Professional'}</h5>
      </div>
      <div className="p-4">
        {jobDescription ? (
          <div dangerouslySetInnerHTML={{ __html: jobDescription }} />
        ) : (
          <p className="text-gray-500">No job description generated</p>
        )}
      </div>
    </div>
  );
}

export default JobDescription;