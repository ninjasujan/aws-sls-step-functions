/** Lambda step function Task */
const checkCandidateAvailability = async (event) => {
    const count = event.count;
    const isCandidateExist = count > 0;
    return isCandidateExist;
};

/** Lambda Task - Schedule Interview  */
const scheduleInterview = async (event) => {
    const count = event.count;
    const isCandidateExist = event.isCandidateExist;
    const message = "Scheduling Initiated";
    return {
        message,
        count,
        isCandidateExist,
    };
};

/** Lambda Task - Add Candidate */
const addCandidate = async (event) => {
    const count = event.count;
    const message = "Add Candidate Under Job";
    const isCandidateExist = event.isCandidateExist;
    return {
        message,
        count,
        isCandidateExist,
    };
};

module.exports = {
    checkCandidateAvailability,
    scheduleInterview,
    addCandidate,
};
