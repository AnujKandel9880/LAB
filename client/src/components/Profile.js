import logo from '../logo.png';
import anuj from '../abs.jpg';
import '../App.css';
function App() {
  return (	
<div class="ex1">
<img src={logo} align="left" style={{width:"55px",height:"55px"}} alt="hi"/>
<h5>KL Deemed to be University</h5>
<h6>Vaddeswaram,Andhrapradesh-522502</h6>
<hr color="black"/>
<img src={anuj} align="center" style={{width:"120px",height:"120px"}} alt="hi"/>
<h5>Anuj Kandel Sharma </h5>
<h5>210032607</h5>
<h5>Student</h5>
</div>    
);
}
export default App;

