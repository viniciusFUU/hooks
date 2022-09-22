import React, {useState} from 'react'
import { useEffect } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

// ex01
function calcFatorial(num) {
    const n = parseInt(num)
    if(n < 0) return -1
    if(n === 0) return 1
    return calcFatorial (n - 1) * n
}

// ex02
function parImpar(num2){
    const n2 = parseInt(num2)
    if(n2 === 0) return "Número nulo"
    if(n2 % 2 === 0) return "Número Par"
    if(n2 % 2 !== 0) return "Número Impar"
}

const UseEffect = (props) => {
    const [number, setNumber] = useState(1)
    const [fatorial, setFatorial] = useState(1)

    useEffect(function() {
        setFatorial(calcFatorial(number))
    }, [number])

    //ex02
    const [status, setStatus] = useState("Impar")

    useEffect(function() {
        setStatus(number % 2 === 0 ? "Par" : "Impar")
    }, [number])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />
            <SectionTitle title="Exercício #01"/>

            <div className="center">
                <div>
                    <span className='text'>Fatorial:</span>
                    <span className="text red"> {fatorial === -1 ? "Não existe" : fatorial}</span>
                </div>
                <input type='number' className='input' value={number} onChange={e => setNumber(e.target.value)}></input>
            </div>

            <SectionTitle title="Exercício #02"/>
            <div className="center">
                <div>
                <span className='text'>Status: </span>
                <span className="text red"> {status}</span>
                </div>
            </div>
        </div>
    )
}

export default UseEffect
