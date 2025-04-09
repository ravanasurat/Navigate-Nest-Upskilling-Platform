function ResumeAnalysis({ resumeData }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Skills */}
      <div className="mb-4">
        <div className="border rounded-lg shadow-sm h-full">
          <div className="bg-gray-100 p-4 border-b">
            <h5 className="font-medium text-lg m-0">Skills</h5>
          </div>
          <div className="p-4">
            {resumeData.skills && resumeData.skills.length > 0 ? (
              typeof resumeData.skills === 'string' ? (
                <p>{resumeData.skills}</p>
              ) : (
                <ul className="divide-y">
                  {resumeData.skills.map((skill, index) => (
                    <li key={index} className="py-2 px-1">{skill}</li>
                  ))}
                </ul>
              )
            ) : (
              <p className="text-gray-500">No skills extracted</p>
            )}
          </div>
        </div>
      </div>

      {/* Experience */}
      <div className="mb-4">
        <div className="border rounded-lg shadow-sm h-full">
          <div className="bg-gray-100 p-4 border-b">
            <h5 className="font-medium text-lg m-0">Work Experience</h5>
          </div>
          <div className="p-4">
            {resumeData.work_experience && resumeData.work_experience.length > 0 ? (
              typeof resumeData.work_experience === 'string' ? (
                <p>{resumeData.work_experience}</p>
              ) : (
                resumeData.work_experience.map((exp, index) => (
                  <div key={index} className="mb-3">
                    {typeof exp === 'object' ? (
                      <>
                        <h6 className="font-medium">{exp.company} - {exp.role}</h6>
                        <p className="text-gray-500 text-sm">{exp.dates}</p>
                        <p>{exp.responsibilities}</p>
                      </>
                    ) : (
                      <p>{exp}</p>
                    )}
                    {index < resumeData.work_experience.length - 1 && <hr className="my-2" />}
                  </div>
                ))
              )
            ) : (
              <p className="text-gray-500">No work experience extracted</p>
            )}
          </div>
        </div>
      </div>

      {/* Education */}
      <div className="mb-4">
        <div className="border rounded-lg shadow-sm h-full">
          <div className="bg-gray-100 p-4 border-b">
            <h5 className="font-medium text-lg m-0">Education</h5>
          </div>
          <div className="p-4">
            {resumeData.education && resumeData.education.length > 0 ? (
              typeof resumeData.education === 'string' ? (
                <p>{resumeData.education}</p>
              ) : (
                resumeData.education.map((edu, index) => (
                  <div key={index} className="mb-2">
                    {typeof edu === 'object' ? (
                      <>
                        <h6 className="font-medium">{edu.degree}</h6>
                        <p>{edu.institution} ({edu.dates})</p>
                      </>
                    ) : (
                      <p>{edu}</p>
                    )}
                    {index < resumeData.education.length - 1 && <hr className="my-2" />}
                  </div>
                ))
              )
            ) : (
              <p className="text-gray-500">No education details extracted</p>
            )}
          </div>
        </div>
      </div>

      {/* Projects and Certifications */}
      <div className="mb-4">
        <div className="border rounded-lg shadow-sm h-full">
          <div className="bg-gray-100 p-4 border-b">
            <h5 className="font-medium text-lg m-0">Projects & Certifications</h5>
          </div>
          <div className="p-4">
            <h6 className="font-medium mb-2">Projects</h6>
            {resumeData.projects && resumeData.projects.length > 0 ? (
              typeof resumeData.projects === 'string' ? (
                <p>{resumeData.projects}</p>
              ) : (
                <ul className="divide-y mb-4">
                  {resumeData.projects.map((project, index) => (
                    <li key={index} className="py-2">
                      {typeof project === 'object' ? (
                        <>
                          <strong>{project.name || 'Unnamed Project'}</strong>
                          {project.description && <p>{project.description}</p>}
                          {project.technologies && <p><em>Technologies:</em> {project.technologies}</p>}
                        </>
                      ) : (
                        project
                      )}
                    </li>
                  ))}
                </ul>
              )
            ) : (
              <p className="text-gray-500">No projects extracted</p>
            )}
            <h6 className="font-medium mt-4 mb-2">Certifications</h6>
            {resumeData.certifications && resumeData.certifications.length > 0 ? (
              typeof resumeData.certifications === 'string' ? (
                <p>{resumeData.certifications}</p>
              ) : (
                <ul className="divide-y">
                  {resumeData.certifications.map((cert, index) => (
                    <li key={index} className="py-2">
                      {typeof cert === 'object' ? (
                        <>
                          <strong>{cert.name || 'Unnamed Certification'}</strong>
                          {cert.provider && <p><em>Provider:</em> {cert.provider}</p>}
                        </>
                      ) : (
                        cert
                      )}
                    </li>
                  ))}
                </ul>
              )
            ) : (
              <p className="text-gray-500">No certifications extracted</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResumeAnalysis;