import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AadirAlbum from './screens/AadirAlbum'
import Tiempo from './screens/Tiempo'
import Album from './screens/Album'
import Etapas from './screens/Etapas'
import Privacidad from './screens/Privacidad'
import SubeTusRecuerdos from './screens/SubeTusRecuerdos'
import LOGIN from './screens/LOGIN'
import Onboarding from './screens/Onboarding'
import Onboarding1 from './screens/Onboarding1'
import OpcionesFamiliar from './components/OpcionesFamiliar'
import MiSalud from './screens/MiSalud'
import MiInformacinPersonal from './screens/MiInformacinPersonal'
import RETOSMSVOTADOS from './screens/RETOSMSVOTADOS'
import Valorar from './screens/Valorar'
import ETIQUETADO from './components/ETIQUETADO'
import AadirRecuerdo from './screens/AadirRecuerdo'
import AadirRecuerdo1 from './screens/AadirRecuerdo1'
import CrearLbum from './screens/CrearLbum'
import MisAlbumesFamiliares from './screens/MisAlbumesFamiliares'
import SuscritoConExito from './screens/SuscritoConExito'
import ConfirmarAsistencia from './components/ConfirmarAsistencia'
import FECHA4 from './screens/FECHA4'
import AadirAUnAlbum from './screens/AadirAUnAlbum'
import CrearAlbum from './screens/CrearAlbum'
import Organizador from './screens/Organizador'
import RetosFamiliaresCumplido from './screens/RetosFamiliaresCumplido'
import RetosFamiliaresSinCumplir from './screens/RetosFamiliaresSinCumplir'
import AccesoAContactos from './screens/AccesoAContactos'
import Situacin from './screens/Situacin'
import MensajePerzonalizado from './components/MensajePerzonalizado'
import TipoDeAlerta from './components/TipoDeAlerta'
import Chat from './screens/Chat'
import AADIRAADIRANCESTRO from './screens/AADIRAADIRANCESTRO'
import AADIRAADIRINFANTE from './screens/AADIRAADIRINFANTE'
import TarjetaDigital from './screens/TarjetaDigital'
import MUROALERTAS1 from './screens/MUROALERTAS1'
import MENSAJERA from './screens/MENSAJERA'
import MisFamiliares from './screens/MisFamiliares'
import MisFamiliares1 from './screens/MisFamiliares1'
import Busqueda from './screens/Busqueda/Busqueda'
import BIO2Ancestro from './screens/BIO2Ancestro'
import BIO2Infante from './screens/BIO2Infante'
import PERFILIDANCESTRO from './screens/PERFILIDANCESTRO'
import PERFILIDINFANTE from './screens/PERFILIDINFANTE'
import PERFILCREARIDINFANTEANCE from './screens/PERFILCREARIDINFANTEANCE'
import Novedades from './screens/Novedades'
import Recompensas from './screens/Recompensas'
import DiseoDeLaInvitacion from './components/DiseoDeLaInvitacion'
import DiseoTarjetaDigital from './components/DiseoTarjetaDigital'
import AsistenciaActualizada from './components/AsistenciaActualizada'
import QR from './components/QR'
import ValorarEvento from './components/ValorarEvento'
import RecopilacionDeRespuestas from './screens/RecopilacionDeRespuestas'
import VistaPrevia from './components/VistaPrevia'
import Invitacin from './screens/Invitacin'
import Padres from './components/Padres'
import Humor from './components/Humor'
import MIDIARIOPANTALLAPERSONAL from './screens/MIDIARIOPANTALLAPERSONAL'
import MIDIARIOEDICINVIDEO from './screens/MIDIARIOEDICINVIDEO'
import MIDIARIOEDICINVIDEO1 from './screens/MIDIARIOEDICINVIDEO1'
import MIDIARIOEDICINVIDEO2 from './screens/MIDIARIOEDICINVIDEO2'
import MIDIARIOENTRADAVIDEO from './screens/MIDIARIOENTRADAVIDEO'
import Onboarding2 from './screens/Onboarding2'
import Muro from './screens/Muro'
import FechaYHora from './components/FechaYHora'
import FormatoArbol from './components/FormatoArbol'
import Para from './components/Para'
import Privacidad1 from './screens/Privacidad1'
import FormatoLista from './components/FormatoLista'
import Etiquetar from './components/Etiquetar'
import Invitados from './components/Invitados'
import FormaDeEnvo from './components/FormaDeEnvo'
import OpcionesTituloDelEvento from './components/OpcionesTituloDelEvento'
import CrearEvento from './screens/CrearEvento'
import OpcionesAmigo from './components/OpcionesAmigo'
import Parentezco from './components/Parentezco'
import BOTONInvitarAmigos from './screens/BOTONInvitarAmigos'
import BOTONInvitarAmigos1 from './screens/BOTONInvitarAmigos1'
import Aadir1 from './components/Aadir1'
import PERFILNOTIFICACIONES from './screens/PERFILNOTIFICACIONES'
import PerfilVerificacion from './screens/Perfil/Ajustes/PerfilVerificacion'
import PERFILAJUSTESSUSCRIPCION from './screens/PERFILAJUSTESSUSCRIPCION'
import PerfilSeguridad from './screens/Perfil/Ajustes/PerfilSeguridad'
import PerfilPrivacidad from './screens/Perfil/Ajustes/PerfilPrivacidad'
import PerfilVisualizacionMyTree from './screens/Perfil/Ajustes/PerfilVisualizacionMyTree'
import PERFILDELUSUARIOVISITADO from './screens/PERFILDELUSUARIOVISITADO'
import CONDOLENCIAS from './components/CONDOLENCIAS'
import PERFILANCESTROAJUSTES from './screens/PERFILANCESTROAJUSTES'
import PERFILANCESTROAJUSTES1 from './screens/PERFILANCESTROAJUSTES1'
import PERFILINFANTEAJUSTES from './screens/PERFILINFANTEAJUSTES'
import PERFILDELUSUARIOVISITADO1 from './screens/PERFILDELUSUARIOVISITADO1'
import PerfilConfiguracion from './screens/Perfil/Ajustes/PerfilConfiguracion'
import MISAMIGOS from './screens/MISAMIGOS'
import PerfilAjustes from './screens/Perfil/Ajustes/PerfilAjustes'
import PERFILDELUSUARIOVISITADO2 from './screens/PERFILDELUSUARIOVISITADO2'
import PERFILMIINFO from './screens/Perfil/PERFILMIINFO'
import RetosBienvenida from './screens/RetosBienvenida'
import MisAlbumes from './screens/Perfil/MisAlbumes'
import SOLOYO from './screens/Perfil/SOLOYO'
import Perfil from './screens/Perfil/Perfil'
import MIDIARIOENTRADATEXTOPL from './screens/MIDIARIOENTRADATEXTOPL'
import MIDIARIOENTRADATEXTOPL1 from './screens/MIDIARIOENTRADATEXTOPL1'
import MIDIARIOENTRADATEXTOPL2 from './screens/MIDIARIOENTRADATEXTOPL2'
import MIDIARIOENTRADATEXTOPL3 from './screens/MIDIARIOENTRADATEXTOPL3'
import MIDIARIOENTRADATEXTOPL4 from './screens/MIDIARIOENTRADATEXTOPL4'
import MIDIARIOENTRADATEXTOPL5 from './screens/MIDIARIOENTRADATEXTOPL5'
import MIDIARIOENTRADATEXTOPL7 from './screens/MIDIARIOENTRADATEXTOPL7'
import OpcionesZonaHoraria from './components/OpcionesZonaHoraria'
import OpcionesCaategora from './components/OpcionesCaategora'
import OpcionesFormatoFecha from './components/OpcionesFormatoFecha'
import OpcionesCulturas from './components/OpcionesCulturas'
import OpcionesInicioDeSemana from './components/OpcionesInicioDeSemana'
import OpcionesIdioma from './components/OpcionesIdioma'
import CALENDARIOAJUSTES from './screens/CALENDARIOAJUSTES'
import CALENDARIOCREARFECHAESPEC from './screens/CALENDARIOCREARFECHAESPEC'
import CALENDARIO from './screens/CALENDARIO'
import Success from './screens/Success'
import Splash from './screens/Splash'
import REGISTROPOLTICASDEPRIVAC from './screens/REGISTROPOLTICASDEPRIVAC'
import REGISTROTRMINOSYCONDICIO from './screens/REGISTROTRMINOSYCONDICIO'
import REGISTRONOMBRE from './screens/REGISTRONOMBRE'
import Suscripciones from './screens/Perfil/Ajustes/Suscripciones'
import CrearGrupo from './screens/CrearGrupo'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { loadFonts } from './GlobalStyles'
import Register from './screens/Register'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import CrearReto from './screens/CrearReto'
import FooterNavBar from './components/FooterNavBar'
import Papers from './screens/Papers'
import Paper from './screens/Paper'
import FiltroEdicion from './components/FiltroEdicion'
import FiltroEdicionRecuerdo from './components/FiltroEdicionRecuerdo'

const Stack = createNativeStackNavigator()

const App = () => {
  const [isFooterShow, setIsFooterShow] = useState(null)

  useEffect(() => {
    loadFonts()
  }, [])

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Onboarding2"
          screenOptions={({ route }) => ({
            headerShown: false,
            footerShown: setIsFooterShow(
              route.name !== 'Register' &&
                route.name !== 'Splash' &&
                route.name !== 'Onboarding' &&
                route.name !== 'Onboarding1' &&
                route.name !== 'Onboarding2' &&
                route.name !== 'LOGIN'
            )
          })}
        >
          <Stack.Screen
            name="AadirAlbum"
            component={AadirAlbum}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Tiempo"
            component={Tiempo}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Album"
            component={Album}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Etapas"
            component={Etapas}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Privacidad"
            component={Privacidad}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SubeTusRecuerdos"
            component={SubeTusRecuerdos}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="LOGIN"
            component={LOGIN}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Onboarding"
            component={Onboarding}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Onboarding1"
            component={Onboarding1}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="OpcionesFamiliar"
            component={OpcionesFamiliar}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="MiSalud"
            component={MiSalud}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="MiInformacinPersonal"
            component={MiInformacinPersonal}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="RETOSMSVOTADOS"
            component={RETOSMSVOTADOS}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Valorar"
            component={Valorar}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="FiltroEdicion"
            component={FiltroEdicion}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ETIQUETADO"
            component={ETIQUETADO}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="AadirRecuerdo"
            component={AadirRecuerdo}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="AadirRecuerdo1"
            component={AadirRecuerdo1}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CrearLbum"
            component={CrearLbum}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="MisAlbumesFamiliares"
            component={MisAlbumesFamiliares}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SuscritoConExito"
            component={SuscritoConExito}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ConfirmarAsistencia"
            component={ConfirmarAsistencia}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="FECHA4"
            component={FECHA4}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="AadirAUnAlbum"
            component={AadirAUnAlbum}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CrearAlbum"
            component={CrearAlbum}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Organizador"
            component={Organizador}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="RetosFamiliaresCumplido"
            component={RetosFamiliaresCumplido}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="RetosFamiliaresSinCumplir"
            component={RetosFamiliaresSinCumplir}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="AccesoAContactos"
            component={AccesoAContactos}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Situacin"
            component={Situacin}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="MensajePerzonalizado"
            component={MensajePerzonalizado}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="TipoDeAlerta"
            component={TipoDeAlerta}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Chat"
            component={Chat}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="AADIRAADIRANCESTRO"
            component={AADIRAADIRANCESTRO}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="AADIRAADIRINFANTE"
            component={AADIRAADIRINFANTE}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="TarjetaDigital"
            component={TarjetaDigital}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CrearReto"
            component={CrearReto}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="MUROALERTAS1"
            component={MUROALERTAS1}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="MENSAJERA"
            component={MENSAJERA}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="MisFamiliares"
            component={MisFamiliares}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="MisFamiliares1"
            component={MisFamiliares1}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Busqueda"
            component={Busqueda}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="BIO2Ancestro"
            component={BIO2Ancestro}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="BIO2Infante"
            component={BIO2Infante}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="PERFILIDANCESTRO"
            component={PERFILIDANCESTRO}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="PERFILIDINFANTE"
            component={PERFILIDINFANTE}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="PERFILCREARIDINFANTEANCE"
            component={PERFILCREARIDINFANTEANCE}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Novedades"
            component={Novedades}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Recompensas"
            component={Recompensas}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="DiseoDeLaInvitacion"
            component={DiseoDeLaInvitacion}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="DiseoTarjetaDigital"
            component={DiseoTarjetaDigital}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="AsistenciaActualizada"
            component={AsistenciaActualizada}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="QR"
            component={QR}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ValorarEvento"
            component={ValorarEvento}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="RecopilacionDeRespuestas"
            component={RecopilacionDeRespuestas}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="VistaPrevia"
            component={VistaPrevia}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Invitacin"
            component={Invitacin}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Padres"
            component={Padres}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Humor"
            component={Humor}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="MIDIARIOPANTALLAPERSONAL"
            component={MIDIARIOPANTALLAPERSONAL}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="MIDIARIOEDICINVIDEO"
            component={MIDIARIOEDICINVIDEO}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="MIDIARIOEDICINVIDEO1"
            component={MIDIARIOEDICINVIDEO1}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="MIDIARIOEDICINVIDEO2"
            component={MIDIARIOEDICINVIDEO2}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="MIDIARIOENTRADAVIDEO"
            component={MIDIARIOENTRADAVIDEO}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Onboarding2"
            component={Onboarding2}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Muro"
            component={Muro}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="FechaYHora"
            component={FechaYHora}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="FormatoArbol"
            component={FormatoArbol}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Para"
            component={Para}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Privacidad1"
            component={Privacidad1}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="FormatoLista"
            component={FormatoLista}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Etiquetar"
            component={Etiquetar}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Invitados"
            component={Invitados}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="FormaDeEnvo"
            component={FormaDeEnvo}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="OpcionesTituloDelEvento"
            component={OpcionesTituloDelEvento}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CrearEvento"
            component={CrearEvento}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="OpcionesAmigo"
            component={OpcionesAmigo}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Parentezco"
            component={Parentezco}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="BOTONInvitarAmigos"
            component={BOTONInvitarAmigos}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="BOTONInvitarAmigos1"
            component={BOTONInvitarAmigos1}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Aadir1"
            component={Aadir1}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="PERFILNOTIFICACIONES"
            component={PERFILNOTIFICACIONES}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="PerfilVerificacion"
            component={PerfilVerificacion}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="PERFILAJUSTESSUSCRIPCION"
            component={PERFILAJUSTESSUSCRIPCION}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="PerfilSeguridad"
            component={PerfilSeguridad}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="PerfilPrivacidad"
            component={PerfilPrivacidad}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="PerfilVisualizacionMyTree"
            component={PerfilVisualizacionMyTree}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="PERFILDELUSUARIOVISITADO"
            component={PERFILDELUSUARIOVISITADO}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CONDOLENCIAS"
            component={CONDOLENCIAS}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="PERFILANCESTROAJUSTES"
            component={PERFILANCESTROAJUSTES}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="PERFILANCESTROAJUSTES1"
            component={PERFILANCESTROAJUSTES1}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="PERFILINFANTEAJUSTES"
            component={PERFILINFANTEAJUSTES}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="PERFILDELUSUARIOVISITADO1"
            component={PERFILDELUSUARIOVISITADO1}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="PerfilConfiguracion"
            component={PerfilConfiguracion}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="MISAMIGOS"
            component={MISAMIGOS}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="PerfilAjustes"
            component={PerfilAjustes}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="PERFILDELUSUARIOVISITADO2"
            component={PERFILDELUSUARIOVISITADO2}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="PERFILMIINFO"
            component={PERFILMIINFO}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="RetosBienvenida"
            component={RetosBienvenida}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="MisAlbumes"
            component={MisAlbumes}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SOLOYO"
            component={SOLOYO}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Perfil"
            component={Perfil}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="MIDIARIOENTRADATEXTOPL"
            component={MIDIARIOENTRADATEXTOPL}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="MIDIARIOENTRADATEXTOPL1"
            component={MIDIARIOENTRADATEXTOPL1}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="MIDIARIOENTRADATEXTOPL2"
            component={MIDIARIOENTRADATEXTOPL2}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="MIDIARIOENTRADATEXTOPL3"
            component={MIDIARIOENTRADATEXTOPL3}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="MIDIARIOENTRADATEXTOPL4"
            component={MIDIARIOENTRADATEXTOPL4}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="MIDIARIOENTRADATEXTOPL5"
            component={MIDIARIOENTRADATEXTOPL5}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Papers"
            component={Papers}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="MIDIARIOENTRADATEXTOPL7"
            component={MIDIARIOENTRADATEXTOPL7}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Paper"
            component={Paper}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="OpcionesZonaHoraria"
            component={OpcionesZonaHoraria}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="OpcionesCaategora"
            component={OpcionesCaategora}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="OpcionesFormatoFecha"
            component={OpcionesFormatoFecha}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="OpcionesCulturas"
            component={OpcionesCulturas}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="OpcionesInicioDeSemana"
            component={OpcionesInicioDeSemana}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="OpcionesIdioma"
            component={OpcionesIdioma}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CALENDARIOAJUSTES"
            component={CALENDARIOAJUSTES}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CALENDARIOCREARFECHAESPEC"
            component={CALENDARIOCREARFECHAESPEC}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CALENDARIO"
            component={CALENDARIO}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="FiltroEdicionRecuerdo"
            component={FiltroEdicionRecuerdo}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Success"
            component={Success}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Splash"
            component={Splash}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="REGISTROPOLTICASDEPRIVAC"
            component={REGISTROPOLTICASDEPRIVAC}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="REGISTROTRMINOSYCONDICIO"
            component={REGISTROTRMINOSYCONDICIO}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="REGISTRONOMBRE"
            component={REGISTRONOMBRE}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Suscripciones"
            component={Suscripciones}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CrearGrupo"
            component={CrearGrupo}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
        {isFooterShow && <FooterNavBar />}
      </NavigationContainer>
    </Provider>
  )
}
export default App
