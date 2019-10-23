const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

function helloworld(props) {
  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer documentContainer postContainer">
        <h1>Profile </h1>
        <h2> Name :::: SHILPI DIXIT</h2>
        <h3> Email id ::: sd@gmail.com </h3>
        <h2> Occupation ::: Technical Training Specialist  </h2>
        <h2> Education :::: Master in computer science </h2>
        <h2>SUMMARY</h2>
        <p> A highly knowledgeable professional with 15+ years of experience in Learning and Development, excellent interpersonal skills and strong abilities in designing development and implementation of training and educational programs.

Excellent knowledge of adult learning theories and principles.
Expertise in training needs analysis, design & develop learning materials, and manage LMS systems.
Manage vendors like Oracle, Microsoft, CISCO and NIIT Ltd.
Delivering trainings, in-class and remote, ensuring that learners remain engaged and the learning content has a higher retention quotient.
</p>
      </Container>
    </div>
  );
}

module.exports = helloworld;
