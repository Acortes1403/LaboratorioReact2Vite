import { useFetch } from '../hooks/useFetch.js';
import { useCounter } from '../hooks/useCounter.js';
import { Loading } from './Loading.jsx';
import { Card } from './Card.jsx';
export const CustomHook = () => {
    const { counter, decrement, increment } = useCounter(1);
    const {data, isLoading} = useFetch
(`https://swapi.dev/api/people/${counter}`);
    return (
    <>
        <h1>Información de StarWars</h1>
        <hr/>
        <h2>{data?.name}</h2>
        {isLoading ? <Loading/>
        : (<Card id={counter} name={data.name} gender={data.gender} img={ [
        data.url,
        data.name,
        data.gender,
        ] } />)}
        <button className='btn btn-primary' onClick= { ()=>decrement() } >Anterior</button>
        <button className='btn btn-primary' onClick= { ()=>increment() } >Siguiente</button>
    </>
    )
}
