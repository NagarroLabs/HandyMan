import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../shared/context/auth-context";

import { useHttpClient } from "../shared/hooks/http-hook";
import ViewDetailsAboutJobForm from "./ViewDetailsAboutJobForm";

function ViewDetailsAboutJobPage() {
  const { sendRequest } = useHttpClient();
  const [job, setJob] = useState({
    jobName: "",
    jobDescription: "",
    jobCategory: "",
    jobBudget: "",
    jobStartDate: "",
    jobCompletionFrame: "",
    jobReqSkills: [],
    jobCountry: "",
    jobRegion: "",
    jobCity: "",
    jobAddress: "",
    jobOwner: null,
  });

  const auth = useContext(AuthContext);
  const userId = auth.userId;

  //   useEffect(() => {
  //     async function getJobById() {
  //       try {
  //         const url = "http://localhost:3001/api/jobs/" + jobId;
  //         const responseData = await sendRequest(url);
  //         setJob(responseData.user);
  //       } catch (err) {}
  //     }

  //     getJobById();
  //   }, [sendRequest, jobId]);

  return (
    <>
      <ViewDetailsAboutJobForm job={job} />
    </>
  );
}

export default ViewDetailsAboutJobPage;
