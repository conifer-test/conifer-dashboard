import Test from './Test';
import TestSuite from './TestSuite';

const TestSuites = ({ testSuite }) => {
  const tests = testSuite.tests;
  const suites = testSuite.suites;

  return (
    <>
      {tests.map((test) => (
        <Test key={test.uuid} test={test} indent={false} />
      ))}
      {suites.map((suite) => (
        <TestSuite key={suite.title} suite={suite} />
      ))}
    </>
  );
};

export default TestSuites;
