import './style.css'

export default function Desplay ({msg, data}) {

    return(

        <>        
        {
           typeof msg === 'string'? 
           <div className="invalida"> Requisição inválida! </div> 
           : data !== '' ?  <div className="valida"> Requisição feita com sucesso!</div> : <></>
        }
        </>
        
    )
}
