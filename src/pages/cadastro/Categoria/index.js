import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descrição: '',
    cor: '',
  }

  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);
  
  
  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    })
  }

  function handleNomeCategoria(e) {
    const name = e.target.getAttribute('name')
    const { value } = e.target
    setValue(name, value)
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome}</h1>

      <form onSubmit={function handleSubmit(e) {
        e.preventDefault();

        setCategorias([
          ...categorias,
          values
        ]);

        setValues(valoresIniciais);
      }}>

        <FormField 
          label="Nome da categoria"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleNomeCategoria}
          input={true}
        />

        <FormField 
          label="Descrição"
          type="text"
          name="descrição"
          value={values.descrição}
          onChange={handleNomeCategoria}
          input={false}
        />

        <FormField 
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleNomeCategoria}
          input={true}
        />

        <button>
          Cadastrar
        </button>
      </form>

      <ul>
        {categorias.map((categoria, indice) => {
          return (
            <li key={`${categoria}${indice}`}>
              {categoria.nome}
            </li>
          )
        })}
      </ul>


      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;