/** Lambda step function Task */
module.exports.checkCandidate = async (event) => {
  const candidateCount = 10;
  return {
    candidateCount,
  };
};
