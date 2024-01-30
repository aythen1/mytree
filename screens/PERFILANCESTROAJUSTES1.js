import React, { useState, useCallback } from "react";
import { Text, StyleSheet, View, Pressable, Modal } from "react-native";
import { Image } from "expo-image";
import Fecha1 from "../components/Fecha1";
import AadirPregunta from "../components/AadirPregunta";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const PERFILANCESTROAJUSTES1 = () => {
  const [frameContainer1Visible, setFrameContainer1Visible] = useState(false);
  const [vectorIcon3Visible, setVectorIcon3Visible] = useState(false);
  const navigation = useNavigation();

  const openFrameContainer1 = useCallback(() => {
    setFrameContainer1Visible(true);
  }, []);

  const closeFrameContainer1 = useCallback(() => {
    setFrameContainer1Visible(false);
  }, []);

  const openVectorIcon3 = useCallback(() => {
    setVectorIcon3Visible(true);
  }, []);

  const closeVectorIcon3 = useCallback(() => {
    setVectorIcon3Visible(false);
  }, []);

  return (
    <>
      <View style={styles.perfilAncestroAjustes}>
        <View
          style={[styles.perfilAncestroAjustesInner, styles.backParentPosition]}
        >
          <View style={[styles.defuncinParent, styles.parentPosition]}>
            <Text style={[styles.defuncin, styles.defuncinLayout]}>
              Defunción
            </Text>
            <Pressable
              style={[styles.frameParent, styles.parentFlexBox]}
              onPress={openFrameContainer1}
            >
              <View style={styles.fechaDeDefuncinParent}>
                <Text
                  style={[styles.fechaDeDefuncin, styles.fechaDeDefuncinTypo]}
                >
                  Fecha de defunción
                </Text>
                <Text style={[styles.text, styles.textSpaceBlock]}>
                  1/05/2008
                </Text>
              </View>
              <Image
                style={styles.vectorIcon}
                contentFit="cover"
                source={require("../assets/vector47.png")}
              />
            </Pressable>
            <View style={[styles.frameParent, styles.parentFlexBox]}>
              <View style={styles.fechaDeDefuncinParent}>
                <Text
                  style={[styles.fechaDeDefuncin, styles.fechaDeDefuncinTypo]}
                >
                  Motivo de defunción
                </Text>
                <Text style={[styles.text, styles.textSpaceBlock]}>
                  Causa Natural
                </Text>
              </View>
              <Image
                style={styles.vectorIcon}
                contentFit="cover"
                source={require("../assets/vector47.png")}
              />
            </View>
            <View style={[styles.frameParent, styles.parentFlexBox]}>
              <View style={styles.fechaDeDefuncinParent}>
                <Text
                  style={[styles.fechaDeDefuncin, styles.fechaDeDefuncinTypo]}
                >
                  ¿Organizar despedida?
                </Text>
              </View>
              <Text style={styles.siNo}>
                <Text style={styles.si}>
                  <Text style={styles.si1}>Si</Text>
                  <Text style={styles.text1}>{` `}</Text>
                </Text>
                <Text style={styles.no}>No</Text>
              </Text>
            </View>
            <View style={[styles.frameParent, styles.parentFlexBox]}>
              <View style={styles.fechaDeDefuncinParent}>
                <Text
                  style={[styles.fechaDeDefuncin, styles.fechaDeDefuncinTypo]}
                >
                  Foto de perfil
                </Text>
              </View>
              <Image
                style={styles.vectorIcon}
                contentFit="cover"
                source={require("../assets/vector46.png")}
              />
            </View>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require("../assets/line-802.png")}
            />
            <View style={styles.formularioParent}>
              <Text style={[styles.defuncin, styles.defuncinLayout]}>
                Formulario
              </Text>
              <Pressable style={styles.vector} onPress={openVectorIcon3}>
                <Image
                  style={styles.iconLayout}
                  contentFit="cover"
                  source={require("../assets/vector21.png")}
                />
              </Pressable>
            </View>
            <View style={[styles.frameParent, styles.parentFlexBox]}>
              <View style={styles.fechaDeDefuncinParent}>
                <Text style={[styles.cmoEraMi, styles.cmoEraMiTypo]}>
                  ¿Cómo era mi personalidad?
                </Text>
                <Text style={[styles.rcuNuncMattis, styles.cmoEraMiTypo]}>
                  rcu nunc mattis. Mauris feugiat non interdum...
                </Text>
              </View>
              <Image
                style={styles.vectorIcon}
                contentFit="cover"
                source={require("../assets/vector47.png")}
              />
            </View>
            <View style={[styles.frameParent, styles.parentFlexBox]}>
              <View style={styles.fechaDeDefuncinParent}>
                <Text style={[styles.cmoEraMi, styles.cmoEraMiTypo]}>
                  Vínculos familiares
                </Text>
                <Text style={[styles.rcuNuncMattis, styles.cmoEraMiTypo]}>
                  rcu nunc mattis. Mauris feugiat non interdum...
                </Text>
              </View>
              <Image
                style={styles.vectorIcon}
                contentFit="cover"
                source={require("../assets/vector47.png")}
              />
            </View>
            <View style={[styles.frameParent, styles.parentFlexBox]}>
              <View style={styles.fechaDeDefuncinParent}>
                <Text style={[styles.cmoEraMi, styles.cmoEraMiTypo]}>
                  Expresiones y gestos característicos
                </Text>
                <Text style={[styles.rcuNuncMattis, styles.cmoEraMiTypo]}>
                  rcu nunc mattis. Mauris feugiat non interdum...
                </Text>
              </View>
              <Image
                style={styles.vectorIcon}
                contentFit="cover"
                source={require("../assets/vector47.png")}
              />
            </View>
            <View style={[styles.frameParent, styles.parentFlexBox]}>
              <View style={styles.fechaDeDefuncinParent}>
                <Text style={[styles.cmoEraMi, styles.cmoEraMiTypo]}>
                  Pasatiempos y gustos
                </Text>
                <Text style={[styles.rcuNuncMattis, styles.cmoEraMiTypo]}>
                  rcu nunc mattis. Mauris feugiat non interdum...
                </Text>
              </View>
              <Image
                style={styles.vectorIcon}
                contentFit="cover"
                source={require("../assets/vector47.png")}
              />
            </View>
            <View style={[styles.frameParent, styles.parentFlexBox]}>
              <View style={styles.fechaDeDefuncinParent}>
                <Text style={[styles.cmoEraMi, styles.cmoEraMiTypo]}>
                  Valores y saberes
                </Text>
                <Text style={[styles.rcuNuncMattis, styles.cmoEraMiTypo]}>
                  rcu nunc mattis. Mauris feugiat non interdum...
                </Text>
              </View>
              <Image
                style={styles.vectorIcon}
                contentFit="cover"
                source={require("../assets/vector47.png")}
              />
            </View>
          </View>
        </View>
        <Image
          style={styles.navigationIcon}
          contentFit="cover"
          source={require("../assets/navigation31.png")}
        />
        <View style={styles.parentPosition}>
          <View style={styles.frameItem} />
          <View style={[styles.backParent, styles.parentFlexBox]}>
            <Pressable
              style={styles.back}
              onPress={() => navigation.navigate("BIO2Ancestro")}
            >
              <Image
                style={[styles.icon1, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/back.png")}
              />
            </Pressable>
            <Text
              style={[styles.ajustesDelAncestro, styles.fechaDeDefuncinTypo]}
            >
              Ajustes del ancestro
            </Text>
          </View>
          <Image
            style={[styles.image6Icon, styles.backParentPosition]}
            contentFit="cover"
            source={require("../assets/image-6.png")}
          />
        </View>
      </View>

      <Modal animationType="fade" transparent visible={frameContainer1Visible}>
        <View style={styles.frameContainer1Overlay}>
          <Pressable
            style={styles.frameContainer1Bg}
            onPress={closeFrameContainer1}
          />
          <Fecha1 onClose={closeFrameContainer1} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={vectorIcon3Visible}>
        <View style={styles.vectorIcon3Overlay}>
          <Pressable style={styles.vectorIcon3Bg} onPress={closeVectorIcon3} />
          <AadirPregunta onClose={closeVectorIcon3} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  backParentPosition: {
    left: 20,
    position: "absolute",
  },
  parentPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  defuncinLayout: {
    lineHeight: 19,
    letterSpacing: 0,
    fontSize: FontSize.size_base,
  },
  parentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  fechaDeDefuncinTypo: {
    color: Color.negro,
    textAlign: "left",
    fontFamily: FontFamily.lato,
  },
  textSpaceBlock: {
    marginTop: 10,
    fontWeight: "500",
  },
  cmoEraMiTypo: {
    lineHeight: 24,
    textAlign: "left",
    fontFamily: FontFamily.lato,
    letterSpacing: 0,
    fontSize: FontSize.size_base,
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  defuncin: {
    textAlign: "left",
    fontFamily: FontFamily.lato,
    fontWeight: "500",
  },
  frameContainer1Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  frameContainer1Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  fechaDeDefuncin: {
    fontWeight: "500",
    lineHeight: 19,
    letterSpacing: 0,
    fontSize: FontSize.size_base,
  },
  text: {
    color: Color.grisGeneral,
    textAlign: "left",
    fontFamily: FontFamily.lato,
    lineHeight: 19,
    letterSpacing: 0,
    fontSize: FontSize.size_base,
  },
  fechaDeDefuncinParent: {
    width: 347,
  },
  vectorIcon: {
    width: 21,
    height: 21,
    marginLeft: 20,
  },
  frameParent: {
    justifyContent: "flex-end",
    marginTop: 20,
  },
  si1: {
    color: Color.primario1,
  },
  text1: {
    color: Color.white,
  },
  si: {
    fontWeight: "700",
    fontFamily: FontFamily.lato,
  },
  no: {
    color: Color.grisHome,
    fontFamily: FontFamily.lato,
    fontWeight: "500",
  },
  siNo: {
    fontSize: FontSize.size_lg,
    textAlign: "left",
  },
  frameChild: {
    maxHeight: "100%",
    marginTop: 20,
    width: 388,
  },
  vectorIcon3Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  vectorIcon3Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  vector: {
    width: 20,
    height: 20,
    marginLeft: 289,
  },
  formularioParent: {
    marginTop: 20,
    flexDirection: "row",
    width: 388,
  },
  cmoEraMi: {
    color: Color.primario2,
    fontWeight: "700",
  },
  rcuNuncMattis: {
    color: Color.grisClaro,
    marginTop: 10,
    fontWeight: "500",
    width: 347,
  },
  defuncinParent: {
    height: 624,
  },
  perfilAncestroAjustesInner: {
    top: 133,
    height: 694,
    width: 388,
  },
  navigationIcon: {
    marginLeft: -214,
    bottom: 0,
    left: "50%",
    height: 105,
    width: 428,
    position: "absolute",
  },
  frameItem: {
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowRadius: 25,
    elevation: 25,
    shadowOpacity: 1,
    height: 113,
    zIndex: 0,
    width: 428,
    backgroundColor: Color.white,
  },
  icon1: {
    overflow: "hidden",
  },
  back: {
    width: 24,
    height: 24,
  },
  ajustesDelAncestro: {
    fontSize: FontSize.size_5xl,
    fontWeight: "700",
    marginLeft: 20,
  },
  backParent: {
    top: 64,
    justifyContent: "center",
    zIndex: 1,
    left: 20,
    position: "absolute",
  },
  image6Icon: {
    top: 3,
    width: 87,
    height: 55,
    zIndex: 2,
  },
  perfilAncestroAjustes: {
    borderRadius: Border.br_31xl,
    flex: 1,
    height: 926,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default PERFILANCESTROAJUSTES1;
