import { useState, useEffect, useRef } from 'react';

import {
  ContainerEventos, ContentEventos,
  HeaderContent, EventosInfo, Table,
  Thead, Tr, Th, TBody, Td, IconWrapper,
  SettingStyles
} from './Eventos.style';

import { MdMoreVert, MdAdd, MdSearch, MdLens } from "react-icons/md";

import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import Pagination from '../../components/Pagination/Pagination';

import { eventoInfo } from '../../data/EventoInfo';

export default function Eventos() {
  const [inputValue, setInputValue] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const [showSetting, setShowSettings] = useState(null);

  const settingRef = useRef(null)

  const MAX_ITENS_PER_PAGE = 5;
  const startIndex = currentPage * MAX_ITENS_PER_PAGE;
  const endIndex = startIndex + MAX_ITENS_PER_PAGE;


  const getStatusColor = (status) => {
    switch (status) {
      case 'Ativo': return '#4DEF00'
      case 'Pendente': return '#FFD700';
      default: return '#FF0000';
    }
  }

  const eventosFiltrados = eventoInfo.filter((evento) => {

    const busca = inputValue.toLowerCase().trim();

    return (
      evento.data.toLowerCase().includes(busca) ||
      evento.name.toLowerCase().includes(busca) ||
      evento.status.toLowerCase().includes(busca) ||
      evento.totalEquipe.toString().includes(busca)
    );
  })

  useEffect(() => {
    setCurrentPage(0)
  }, [inputValue])

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (settingRef.current && !settingRef.current.contains(e.target)) {
        setShowSettings(null);
      }
    }

    return () => {
      document.addEventListener('mousedown', handleClickOutside);
    }
  }, [])


  return (

    <ContainerEventos>
      <h2>Todos eventos</h2>
      <ContentEventos>
        <HeaderContent>

          <IconWrapper>
            <MdSearch />
            <Input
              onChange={(e) => setInputValue(e.target.value)}
              placeholder={'Buscar Eventos'}

            />
          </IconWrapper>
          <Button active>
            <MdAdd size={18} />
            Inserir Novo
          </Button>
        </HeaderContent>

        <EventosInfo>
          <Table>

            <Thead >
              <Tr>
                <Th>Nome do evento</Th>
                <Th>Total de Equipes</Th>
                <Th>Status</Th>
                <Th>Data</Th>
                <Th></Th>
              </Tr>
            </Thead>

            <TBody>

              {eventosFiltrados.slice(startIndex, endIndex).map((evento) => (
                <Tr key={evento.id}>

                  <Td>{evento.name}</Td>
                  <Td>{evento.totalEquipe}</Td>
                  <Td>
                    <MdLens color={getStatusColor(evento.status)} />
                    {evento.status}
                  </Td>
                  <Td>{evento.data}</Td>
                  <Td onClick={() => {

                    setShowSettings(evento.id)
                  }}>
                    <MdMoreVert />
                    {showSetting === evento.id && (
                      <SettingsEvents innerRef={settingRef} />)}
                  </Td>
                </Tr>
              ))}
            </TBody>

          </Table>

        </EventosInfo>



        <Pagination
          total={eventoInfo.length}
          totalPerPage={MAX_ITENS_PER_PAGE}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />



      </ContentEventos>
    </ContainerEventos>

  )
}


import { MdOutlineRestoreFromTrash, MdRemoveRedEye, MdEdit } from 'react-icons/md'

function SettingsEvents({ innerRef }) {
  return (
    <SettingStyles ref={innerRef}>
      <button> <MdRemoveRedEye />Visualizar </button>
      <button> <MdEdit /> Editar</button>
      <button> <MdOutlineRestoreFromTrash />Remover</button>
    </SettingStyles>
  )
}