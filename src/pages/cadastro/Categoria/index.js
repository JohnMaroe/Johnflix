/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function useForm(valoresIniciais) {
  const [values, setValues] = useState(valoresIniciais);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    });
  }

  function handleNomeCategoria(e) {
    const name = e.target.getAttribute('name');
    const { value } = e.target;
    setValue(name, value);
  }

  function clearForm() {
    setValues(valoresIniciais);
  }

  return {
    values,
    handleNomeCategoria,
    clearForm,
  };
}

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descrição: '',
    cor: '',
  };

  const { handleNomeCategoria, values, clearForm } = useForm(valoresIniciais);

  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    if (window.location.href.includes('localhost')) {
      const URL = 'http://localhost:8080/categorias';
      fetch(URL)
        .then(async (respostaDoServer) => {
          if (respostaDoServer.ok) {
            const resposta = await respostaDoServer.json();
            setCategorias(resposta);
            return;
          }
          throw new Error('Não foi possível pegar os dados');
        });
    }
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.nome}
      </h1>

      <form onSubmit={function handleSubmit(e) {
        e.preventDefault();

        setCategorias([
          ...categorias,
          values,
        ]);

        clearForm();
      }}
      >

        <FormField
          label="Nome da categoria"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleNomeCategoria}
        />

        <FormField
          label="Descrição"
          type="text"
          name="descrição"
          value={values.descrição}
          onChange={handleNomeCategoria}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleNomeCategoria}
        />

        <Button style={{ background: 'transparent' }}>
          Cadastrar
        </Button>
      </form>

      {categorias.length === 0 && (
      <div>
        Loading...
      </div>
      )}

      <br />

      <table style={{ 'line-height': '20px' }}>
        {categorias.map((categoria) => (
          <tr key={`${categoria.titulo}`}>
            <th>{categoria.titulo}</th>
          </tr>
        ))}
      </table>

      {/* <Link to="/">
        Ir para home
      </Link> */}
    </PageDefault>
  );
}

export default CadastroCategoria;
