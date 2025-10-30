import React, { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

const SubmissionsList = () => {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    const submissionsCol = collection(db, "submissions");
    const unsubscribe = onSnapshot(submissionsCol, (snapshot) => {
      const submissionsList = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setSubmissions(submissionsList);
    });
    return () => unsubscribe();
  }, []);

  if (!submissions.length) return <p>No submissions found.</p>;

  return (
    <div>
      <h2>Form Submissions</h2>
      <ul>
        {submissions.map(sub => (
          <li key={sub.id} style={{ marginBottom: "16px" }}>
            <strong>Name:</strong> {sub.name}<br />
            <strong>Email:</strong> {sub.email}<br />
            <strong>Message:</strong> {sub.message}<br />
            <strong>Timestamp:</strong> {sub.timestamp}<br />
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubmissionsList;
