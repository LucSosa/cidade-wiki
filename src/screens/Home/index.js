import React, { useEffect, useState } from 'react'
import {
  ScreenScrollContainer,
  Container,
  HomeList,
  Hero,
  Loader,
} from '~/components'
import { useGetData } from '~/services/hooks'

const FAKE_DATA_PLACES = [
  {
    id: 0,
    image_url: 'http://v.i.uol.com.br/album/guia/pelotas_f_023.jpg',
    type: 'Prédio',
    subtitle: 'Mercado público de pelotas é uma das marcas da cidade',
    description:
      'É um mercado público municipal típico, com todas as características de um. Tem variadas opções de lanches, algumas lojas de roupas e outras de vendas ',
  },
  {
    id: 1,
    image_url:
      'https://s3-sa-east-1.amazonaws.com/imgs.guiadasartes/loc/loc-1275/ncC0rofg.300x300.jpg',
    type: 'Parque',
    subtitle: 'Além do museu você pode passear no parque da baronesa',
    description:
      'O Museu da Baronesa foi inaugurado em 1982, e é uma instituição cultural da Secretaria da Cultura da Prefeitura Municipal de Pelotas. Foi tombado como patrimônio histórico do município em 1985',
  },
  {
    id: 2,
    image_url:
      'https://media-cdn.tripadvisor.com/media/photo-s/0d/62/4d/dc/catedral-metropolitana.jpg',
    type: 'Igreja',
    subtitle:
      'A Catedral Metropolitana São Francisco de Paula da arquidiocese de Pelotas',
    description:
      'A Arquidiocese de Pelotas é uma divisão territorial da Igreja Católica no estado do Rio Grande do Sul. Foi criada diocese aos 15 de agosto de 1910 pela bula Praedecessorum Nostrorum de São Pio X, e foi elevada a Arquidiocese pelo Papa Bento XVI, no dia 13 de abril de 2011.',
  },
  {
    id: 3,
    image_url:
      'https://media-cdn.tripadvisor.com/media/photo-s/10/65/68/5c/chafariz-da-praca-coronel.jpg',
    type: 'Filme',
    subtitle:
      'A Praça Coronel Pedro Osório é a principal praça da zona central de Pelotas, cidade do Estado Rio Grande do Sul, no Brasil.',
    description:
      'A Praça Coronel Pedro Osório é a principal praça da zona central de Pelotas, cidade do Estado Rio Grande do Sul, no Brasil. Situa-se no entroncamento entre as ruas XV de Novembro, Lobo da Costa, Princesa Isabel, Marechal Floriano, Anchieta e Félix da Cunha e Barão de Butuí, sendo esta região conhecida como o centro histórico da cidade Este local leva o nome do Coronel Pedro Osório. Ao redor da praça encontram-se alguns dos principais locais de importância da cidade. Entre eles, citam-se a Prefeitura Municipal de Pelotas, o Grande Hotel de Pelotas, o Theatro Sete de Abril, a sede da Secretaria de Finanças do Município, alguns bancos privados, vários casarões e prédios de importância histórica.',
  },
]

const FAKE_DATA_FAMOUS_PLACES = [
  {
    id: 0,
    image_url: 'https://i.ytimg.com/vi/2cqcUGFOohs/maxresdefault.jpg',
    type: 'parque',
    subtitle: 'O Parque Una Pelotas é feito de ideias inovadoras.',
    description:
      'O Parque Una representa a materialização de uma nova visão para as cidades brasileiras.',
  },
  {
    id: 1,
    image_url:
      'https://diariodamanhapelotas.com.br/site/wp-content/uploads/2019/10/trapiche-por-do-sol-wiliam-gomez-680x365.jpg',
    type: 'parque',
    subtitle:
      'A praia do Laranjal ela pertence a Laguna dos Patos e está situada em Pelotas',
    description:
      'O Laranjal é mais do que um bairro da cidade. Principalmente no verão, ele se transforma literalmente na própria cidade, quando população e turistas procuram seus balneários.',
  },
  {
    id: 2,
    image_url:
      'https://fastly.4sqi.net/img/general/600x600/50850179_BNimmdFJqrbubcvVBBAWzqW_0n2DW2x9cZcugBjHH1M.jpg',
    type: 'parque',
    subtitle:
      'Com um dos melhores por do sol da cidade de Pelotas o Recanto é o encontro da natureza com a cidade',
    description:
      'Localizado no Recanto de Portugal pode ser considerado um dos melhores locais para se aproveitar e tomar um chimarrão',
  },
]

export const Home = () => {
  const { getFilms, getCharacters } = useGetData()
  const [loading, setLoading] = useState(true)
  //const [films, setFilms] = useState([])
  const [characters, setCharacters] = useState([])

  const callGetData = async () => {
    const filmsResponse = await getFilms()
    const charactersResponse = await getCharacters()

    if (!filmsResponse.error && !charactersResponse.error) {
      //setFilms(filmsResponse)
      setCharacters(charactersResponse)
      setLoading(false)
    }
  }

  useEffect(() => {
    callGetData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (loading) {
    return (
      <Container align="center" justify="center">
        <Loader />
      </Container>
    )
  }

  return (
    <ScreenScrollContainer>
      <Hero
        item={{
          title: 'Pelotas',
          subtitle: 'Casarões da cidade',
          type: 'História',
          image_url:
            'https://acpo.com.br/blog/wp-content/uploads/2020/02/Pelotas.jpg',
        }}
      />
      <HomeList title="Lugares Históricos" data={FAKE_DATA_PLACES} />
      <HomeList title="Rotas Famosas" data={FAKE_DATA_FAMOUS_PLACES} />
    </ScreenScrollContainer>
  )
}
