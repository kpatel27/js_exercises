function generateClassRecordSummary(scores) {
  var scoreData = Object.keys(scores).map(function (student) {
    return scores[student].scores;
  });

  var examData = scoreData.map(function (score) {
    return score.exams;
  });

  return {
    studentGrades: scoreData.map(function (scoreObj) {
      return getStudentScore(scoreObj);
    }),
    exams: getExamSummary(examData),
  };
}

function getStudentScore(scoreObj) {
  var totalExamScore;
  var totalExerciseScore;
  var percentGrade;
  var letterGrade;
  var numberOfExams = scoreObj.exams.length;
  const examWeight = 0.65;
  const exerciseWeight = 0.35;

  var addScore = function (total, score) {
    return total + score;
  };

  totalExamScore = scoreObj.exams.reduce(addScore);
  totalExerciseScore = scoreObj.exercises.reduce(addScore);
  percentGrade = Math.round((totalExamScore / numberOfExams) * examWeight + totalExerciseScore * exerciseWeight);

  switch (true) {
    case percentGrade >= 93:
      letterGrade = 'A';
      break;
    case percentGrade >= 85:
      letterGrade = 'B';
      break;
    case percentGrade >= 77:
      letterGrade = 'C';
      break;
    case percentGrade >= 69:
      letterGrade = 'D';
      break;
    case percentGrade >= 60:
      letterGrade = 'E';
      break;
    default:
      letterGrade = 'F';
  };

  return `${String(percentGrade)} (${letterGrade})`;
}

function getExamSummary(examData) {
  var i;
  var j;
  var maxScore;
  var minScore;
  var totalExamScore;
  var mean;
  var examStats = [];
  var exams = examData[0].length;
  var students = examData.length;

  var addScore = function (total, score) {
    return total + score;
  };

  for (i = 0; i < exams; i += 1) {
    var currentExamScores = [];
    for (j = 0; j < students; j += 1) {
      currentExamScores.push(examData[j][i]);
    };

    maxScore = Math.max(...currentExamScores);
    minScore = Math.min(...currentExamScores);
    totalExamScore = currentExamScores.reduce(function (total, score) {
      return total + score;
    });

    mean = Number((totalExamScore/students).toFixed(2));
    examStats.push({average: mean, minimum: minScore, maximum: maxScore});
  };

  return examStats;
}

var studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

generateClassRecordSummary(studentScores);

/* returns:
{
  studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
  exams: [
    { average: 75.6, minimum: 50, maximum: 100 },
    { average: 86.4, minimum: 70, maximum: 100 },
    { average: 87.6, minimum: 60, maximum: 100 },
    { average: 91.8, minimum: 80, maximum: 100 },
  ],
}
*/
