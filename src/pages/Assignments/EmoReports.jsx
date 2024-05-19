import React, { useState, useEffect } from 'react';

const ReportViewer = () => {
    const [reports, setReports] = useState([]);
    const [selectedReport, setSelectedReport] = useState(null);

    useEffect(() => {
        // Fetch reports from the API
        fetch('http://localhost:5000/api/reports')
            .then(response => response.json())
            .then(data => {
                setReports(data);
            })
            .catch(error => {
                console.error("There was an error fetching the reports!", error);
            });
    }, []);

    const handleReportClick = (report) => {
        setSelectedReport(report);
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Reports</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {reports.map((report) => (
                    <div 
                        key={report._id} 
                        className="p-4 border rounded shadow hover:bg-gray-100 cursor-pointer"
                        onClick={() => handleReportClick(report)}
                    >
                        <p className="font-semibold">Form Type: {report.form_type}</p>
                        <p>Max Emotion: {report.max_emotion}</p>
                        <p>Number of Advices: {report.advice_data.length}</p>
                    </div>
                ))}
            </div>
            {selectedReport && (
                <div className="mt-8 p-4 border rounded shadow">
                    <h2 className="text-xl font-bold mb-4">Report Details</h2>
                    <p className="font-semibold">Form Type: {selectedReport.form_type}</p>
                    <p>Max Emotion: {selectedReport.max_emotion}</p>
                    <div className="mt-4">
                        {selectedReport.advice_data.map((advice, index) => (
                            <div key={index} className="mb-4 p-4 border rounded shadow">
                                <h3 className="font-semibold">Question: {advice.question}</h3>
                                <p><strong>Sentence:</strong> {advice.sentence}</p>
                                <p><strong>Emotions:</strong> {advice.emotions}</p>
                                <p><strong>Advice:</strong> {advice.advice}</p>
                                <p><strong>Action:</strong> {advice.action}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ReportViewer;



// import React, { useState, useEffect } from 'react';

// const ReportViewer = () => {
//     const [reports, setReports] = useState([]);
//     const [selectedReport, setSelectedReport] = useState(null);

//     useEffect(() => {
//         // Fetch reports from the API
//         fetch('http://localhost:5000/api/reports')
//             .then(response => response.json())
//             .then(data => {
//                 setReports(data);
//             })
//             .catch(error => {
//                 console.error("There was an error fetching the reports!", error);
//             });
//     }, []);

//     const handleReportClick = (report) => {
//         setSelectedReport(report);
//     };

//     return (
//         <div className="container mx-auto p-4">
//             <h1 className="text-2xl font-bold mb-4">Reports</h1>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                 {reports.map((report) => (
//                     <div 
//                         key={report._id} 
//                         className="p-4 border rounded shadow hover:bg-gray-100 cursor-pointer"
//                         onClick={() => handleReportClick(report)}
//                     >
//                         <p className="font-semibold">Form Type: {report.form_type}</p>
//                         <p>Max Emotion: {report.max_emotion}</p>
//                         <p>Number of Advices: {report.advice_data.length}</p>
//                     </div>
//                 ))}
//             </div>
//             {selectedReport && (
//                 <div className="mt-8 p-4 border rounded shadow">
//                     <h2 className="text-xl font-bold mb-4">Report Details</h2>
//                     <p className="font-semibold">Form Type: {selectedReport.form_type}</p>
//                     <p>Max Emotion: {selectedReport.max_emotion}</p>
//                     <div className="mt-4">
//                         {selectedReport.advice_data.map((advice, index) => (
//                             <div key={index} className="mb-4 p-4 border rounded shadow">
//                                 <h3 className="font-semibold">Question: {advice.question}</h3>
//                                 <p><strong>Sentence:</strong> {advice.sentence}</p>
//                                 <p><strong>Emotions:</strong> {advice.emotions}</p>
//                                 <p><strong>Advice:</strong> {advice.advice}</p>
//                                 <p><strong>Action:</strong> {advice.action}</p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default ReportViewer;
