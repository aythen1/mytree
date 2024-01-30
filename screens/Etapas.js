import React, { useState, useCallback } from "react";
import { Text, StyleSheet, Pressable, View, Modal } from "react-native";
import { Image } from "expo-image";
import AadirEtapa from "../components/AadirEtapa";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const Etapas = () => {
  const [aadirTextVisible, setAadirTextVisible] = useState(false);

  const openAadirText = useCallback(() => {
    setAadirTextVisible(true);
  }, []);

  const closeAadirText = useCallback(() => {
    setAadirTextVisible(false);
  }, []);

  return (
    <>
      <View style={styles.etapas}>
        <Text
          style={[styles.ecografasYFiesta, styles.aadir1Typo]}
        >{`Ecografías y fiesta del bebé `}</Text>
        <Image
          style={styles.etapasChild}
          contentFit="cover"
          source={require("../assets/line-78.png")}
        />
        <Text style={[styles.recinNacido, styles.aadir1Typo]}>
          Recién nacido
        </Text>
        <Image
          style={styles.etapasChild}
          contentFit="cover"
          source={require("../assets/line-78.png")}
        />
        <Text style={[styles.recinNacido, styles.aadir1Typo]}>
          Primera infancia (desde los 1 a 5 años
        </Text>
        <Image
          style={styles.etapasChild}
          contentFit="cover"
          source={require("../assets/line-78.png")}
        />
        <Text style={[styles.recinNacido, styles.aadir1Typo]}>
          Infancia (de 6 a 11 años)
        </Text>
        <Image
          style={styles.etapasChild}
          contentFit="cover"
          source={require("../assets/line-78.png")}
        />
        <Text style={[styles.recinNacido, styles.aadir1Typo]}>
          Adolescencia (de 12 a 18 años)
        </Text>
        <Image
          style={styles.etapasChild}
          contentFit="cover"
          source={require("../assets/line-78.png")}
        />
        <Text style={[styles.recinNacido, styles.aadir1Typo]}>
          Adultez (más 60 a más)
        </Text>
        <Image
          style={styles.etapasChild}
          contentFit="cover"
          source={require("../assets/line-78.png")}
        />
        <Pressable style={styles.aadir} onPress={openAadirText}>
          <Text style={[styles.aadir1, styles.aadir1Typo]}>+ Añadir</Text>
        </Pressable>
      </View>

      <Modal animationType="fade" transparent visible={aadirTextVisible}>
        <View style={styles.aadirTextOverlay}>
          <Pressable style={styles.aadirTextBg} onPress={closeAadirText} />
          <AadirEtapa onClose={closeAadirText} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  aadir1Typo: {
    textAlign: "left",
    fontFamily: FontFamily.lato,
    fontWeight: "500",
    lineHeight: 19,
    letterSpacing: 0,
    fontSize: FontSize.size_base,
  },
  ecografasYFiesta: {
    color: Color.gris,
    textAlign: "left",
    fontFamily: FontFamily.lato,
    fontWeight: "500",
    lineHeight: 19,
    letterSpacing: 0,
    fontSize: FontSize.size_base,
  },
  etapasChild: {
    maxHeight: "100%",
    width: 388,
    marginTop: 20,
  },
  recinNacido: {
    marginTop: 20,
    color: Color.gris,
    textAlign: "left",
    fontFamily: FontFamily.lato,
    fontWeight: "500",
    lineHeight: 19,
    letterSpacing: 0,
    fontSize: FontSize.size_base,
  },
  aadirTextOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  aadirTextBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  aadir1: {
    color: Color.primario1,
    textAlign: "left",
    fontFamily: FontFamily.lato,
    fontWeight: "500",
    lineHeight: 19,
    letterSpacing: 0,
    fontSize: FontSize.size_base,
  },
  aadir: {
    marginTop: 20,
  },
  etapas: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    padding: Padding.p_xl,
  },
});

export default Etapas;
