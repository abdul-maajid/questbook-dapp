// SPDX-License-Identifier: MIT
pragma solidity 0.8.0;

/**
 * The Codestreet contract does stackoverflow like working reward some eth to problem solver...
 */
contract Codestreet {
  struct Problem {
  	string title;
  	string problemStatement;
  	uint price;
  	address askerAddress;
  	bool approved;
  }
  
  struct Solution {
  	string solutionStatement;
  	address solverAddress;
  	uint problemId;
  	bool approved;
  }

  Problem[] problems;
  Solution[] solutions;

  function addProblem (string memory title, string memory problemStatement) public payable {
  	Problem memory newProblem = Problem(
      title,
      problemStatement,
      msg.value,
      msg.sender,
      false
    );

    problems.push(newProblem);
  }

  function addSolution (uint problemId, string memory solutionStatement) public {
    Solution memory newSolution = Solution(
      solutionStatement,
      msg.sender,
      problemId,
      false
    );

    solutions.push(newSolution);
  }

  function approveSolution (uint solutionId, uint problemId) public {
    Problem memory problem = problems[problemId];
    Solution memory solution = solutions[solutionId];

    require(msg.sender == problem.askerAddress);
    require(!problem.approved);
    (bool sent, ) = solution.solverAddress.call{value: problem.price}("");
    require(sent, "Failed to send ether");
    
    problem.approved = true;
    solution.approved = true;
  }

  function getProblems () public view returns(Problem[] memory) {
    return problems;
  }

  function getSolutions () public view returns(Solution[] memory) {
    return solutions;
  }
  
}
