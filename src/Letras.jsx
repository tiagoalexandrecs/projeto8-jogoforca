import alfabetomaiusculo from "./alfabetomaiusculo"
import forca from "./forca";


export default function Caixas(props){

    function Clique(index){
        let indexNovo= index.toLowerCase()
        const novoArray=[...props.letrasSelecionadas,indexNovo]
        if(props.letrasSelecionadas.includes(indexNovo)){
            let i=0;
         }
         else{
            {props.setLetrasSelecionadas(novoArray)}
            {props.setDesabilitado(true)}
         }
         console.log(novoArray)

        if(props.palavraEscolhida.includes(indexNovo)){
            {props.setContador(props.contador)}
            let indices=[]
            let indice = props.palavraEscolhida.indexOf(indexNovo)
            indices.push(indice)
            let alteracoes = props.palavraEscolhida
            alteracoes.splice(indice,1,"-")
            let auxiliar= alteracoes.indexOf(indexNovo)
            while(auxiliar != -1){
               indices.push(auxiliar)
               alteracoes.splice(auxiliar,1,"-")
               auxiliar= alteracoes.indexOf(indexNovo)
            }
            let palavraalteracao = props.underlines
            console.log(palavraalteracao)
            console.log(indices)
            for(let i=0; i < indices.length; i++){
                palavraalteracao.splice(indices[i],1,indexNovo)
            }
            {props.setUnderlines(palavraalteracao)}

        }
        else{
            let d = props.contador + 1
            {props.setContador(props.contador + 1)};
            {props.setImagem(forca[d])}
            console.log(props.contador)
        }
    }

    return(
        <div className="containerletra">
            {alfabetomaiusculo.map((i) => ( <button onClick={() => Clique(i)} 
                className={`botao ${(props.letrasSelecionadas).includes(i)? "desabilitado" : props.classe}`}
                data-test="letter"
                disabled={(props.letrasSelecionadas).includes(i) || (props.letrasSelecionadas).length === 0?  props.desabilitado : false}>
                    {i}</button>))}
        </div>
    )
}