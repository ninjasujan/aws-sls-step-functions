/** Lambda step function Task */
const checkCandidateAvailability = async (event) => {
    const count = event.count;
    return {
        count,
    };
};

/** Lambda Task - Schedule Interview  */
const scheduleInterview = async (event) => {
    return {
        message: "Scheduling Initiated",
    };
};

/** Lambda Task - Add Candidate */
const addCandidate = async (event) => {
    return {
        message: "Add Candidate first",
    };
};

module.exports = {
    checkCandidateAvailability,
    scheduleInterview,
    addCandidate,
};
