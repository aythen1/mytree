import React, { useState, useRef } from 'react'
import {
  View,
  Modal,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
  StyleSheet
} from 'react-native'
import { Image } from 'expo-image'

const OpcionesModal = ({ opciones, visible, onClose, onAddOption }) => {
  const [nuevaOpcion, setNuevaOpcion] = useState('')
  const [modoAgregar, setModoAgregar] = useState(false)
  const inputRef = useRef(null)

  const agregarOpcion = () => {
    if (nuevaOpcion.trim() !== '') {
      onAddOption(nuevaOpcion)
      setNuevaOpcion('')
    }
    setModoAgregar(false)
  }

  const mostrarInput = () => {
    setModoAgregar(true)
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <FlatList
            data={opciones}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => console.log(`Seleccionado: ${item}`)}
              >
                <Text style={styles.opcionText}>{item}</Text>
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  source={require('../assets/line-802.png')}
                />
              </TouchableOpacity>
            )}
          />

          {modoAgregar ? (
            <View style={styles.agregarContainer}>
              <TextInput
                ref={inputRef}
                style={styles.input}
                placeholder="Nueva opción"
                value={nuevaOpcion}
                onChangeText={(text) => setNuevaOpcion(text)}
              />
              <TouchableOpacity
                onPress={agregarOpcion}
                style={styles.agregarButton}
              >
                <Text style={styles.agregarButtonText}>Aceptar</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <TouchableOpacity
              onPress={mostrarInput}
              style={styles.agregarButton}
            >
              <Text style={styles.agregarButtonText}>+ Añadir</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </Modal>
  )
}
const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10
  },
  opcionText: {
    fontSize: 15,
    marginVertical: 10
  },
  agregarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10
  },
  input: {
    flex: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 8
  },
  agregarButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 5,
    marginLeft: 10,
    padding: 10,
    alignItems: 'center'
  },
  agregarButtonText: {
    color: '#b7e4c0',
    fontSize: 15
  },
  closeButton: {
    backgroundColor: '#3498db',
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
    alignItems: 'center'
  },
  frameChild: {
    height: '0.6%',
    width: '98%',
    marginTop: 10,
    marginBottom: 10
  }
})

export default OpcionesModal
