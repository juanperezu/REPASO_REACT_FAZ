import {Component} from 'react';
import React from 'react';
class Form extends Component{
render(){
return(
<div className="card card-body">
 <h2>Registre su información para porder ingresar al sistema</h2>   
<form>
<div className="form-group">
<label>Nombre</label>
<input type="text"  className="form-control" placeholder="Su Nombre"/>
</div>
<div className="form-group">
<label>Usuario</label>
<input type="text"  className="form-control" placeholder="Su usuario.."/>
</div>
<div className="form-group">
<label>Clave</label>
<input type="password"  className="form-control" placeholder="Su clave.."/>
</div>
<div className="form-group">
<button type="submit" className="btn btn-primary espacio"> Ingresar</button>
<button type="reset" className="btn btn-primary espacio"> Cancelar</button>
</div>

</form>


</div>
);}

}
export default Form;