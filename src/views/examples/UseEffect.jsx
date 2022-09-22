import React, {useState} from 'react'
import { useEffect } from 'react'
import PageTitle from '../../components/layout/PageTitle'

function calcFatorial(num) {
    const n = parseInt(num)
    if(n < 0) return -1
    if(n === 0) return 1
    return calcFatorial (n - 1) * n
}

const UseEffect = (props) => {
    const [number, setNumber] = useState(1)
    const [fatorial, setFatorial] = useState(1)

    useEffect(function() {
        setFatorial(calcFatorial(number))
    }, [number])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />

            <div className="center">
                <div>
                    <span className='text'>Fatorial:</span>
                    <span className="text red"> {fatorial === -1 ? "Não existe" : fatorial}</span>
                </div>
                <input type='number' className='input' value={number} onChange={e => setNumber(e.target.value)}></input>
            </div>


        </div>
    )
}

export default UseEffect
