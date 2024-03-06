/** Lambda step function Task */
const checkCandidateAvailability = async (event) => {
    const count = event.count;
    return {
        count,
    };
};

/** Lambda Task - Schedule Interview  */
const scheduleInterview = async (event) => {
    const count = event.count;
    return {
        message: "Scheduling Initiated",
        count,
    };
};

/** Lambda Task - Add Candidate */
const addCandidate = async (event) => {
    const count = event.count;
    return {
        message: "Add Candidate first",
        count,
    };
};

module.exports = {
    checkCandidateAvailability,
    scheduleInterview,
    addCandidate,
};
