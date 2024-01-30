import React, { useState, useCallback } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable, Modal } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import AsistenciaActualizada from "../components/AsistenciaActualizada";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const Invitacin = () => {
  const navigation = useNavigation();
  const [buttonContainerVisible, setButtonContainerVisible] = useState(false);
  const [buttonContainer1Visible, setButtonContainer1Visible] = useState(false);
  const [buttonContainer2Visible, setButtonContainer2Visible] = useState(false);

  const openButtonContainer = useCallback(() => {
    setButtonContainerVisible(true);
  }, []);

  const closeButtonContainer = useCallback(() => {
    setButtonContainerVisible(false);
  }, []);

  const openButtonContainer1 = useCallback(() => {
    setButtonContainer1Visible(true);
  }, []);

  const closeButtonContainer1 = useCallback(() => {
    setButtonContainer1Visible(false);
  }, []);

  const openButtonContainer2 = useCallback(() => {
    setButtonContainer2Visible(true);
  }, []);

  const closeButtonContainer2 = useCallback(() => {
    setButtonContainer2Visible(false);
  }, []);

  return (
    <>
      <View style={[styles.invitacin, styles.iconLayout]}>
        <View style={[styles.image6Wrapper, styles.parentFlexBox]}>
          <Image
            style={styles.image6Icon}
            contentFit="cover"
            source={require("../assets/image-6.png")}
          />
        </View>
        <View style={[styles.frameParent, styles.frameParentPosition]}>
          <View style={[styles.lineParent, styles.buttonParentPosition]}>
            <View style={styles.frameChild} />
            <Text style={[styles.tituloDelEvento, styles.cdigoTypo]}>
              Titulo del evento
            </Text>
            <View style={[styles.calendarParent, styles.buttonParentPosition]}>
              <Image
                style={styles.calendarIcon}
                contentFit="cover"
                source={require("../assets/calendar.png")}
              />
              <View style={styles.deAgostoParent}>
                <Text style={styles.hsTypo}>24 de Agosto</Text>
                <Text style={[styles.hs, styles.hsTypo]}>16:00 hs</Text>
              </View>
            </View>
            <View
              style={[
                styles.iconlybulklocationParent,
                styles.buttonParentPosition,
              ]}
            >
              <Image
                style={styles.iconlybulklocation}
                contentFit="cover"
                source={require("../assets/iconlybulklocation2.png")}
              />
              <Text style={[styles.lugarDelEvento, styles.hsTypo]}>
                Lugar del evento
              </Text>
            </View>
            <Text style={[styles.cdigo, styles.cdigoTypo]}>#Código</Text>
            <View style={[styles.fieldWithTitle, styles.buttonParentPosition]}>
              <Text style={[styles.observaciones, styles.hsTypo]}>
                Observaciones
              </Text>
              <View style={[styles.field, styles.parentPosition]} />
            </View>
            <View style={[styles.backParent, styles.buttonParentPosition]}>
              <Pressable
                style={styles.calendarIcon}
                onPress={() => navigation.navigate("CALENDARIO")}
              >
                <Image
                  style={[styles.icon, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/back4.png")}
                />
              </Pressable>
              <Text style={[styles.invitacin1, styles.cdigoTypo]}>
                Invitación
              </Text>
            </View>
          </View>
          <View style={[styles.buttonParent, styles.buttonParentPosition]}>
            <Pressable
              style={[styles.button, styles.buttonLayout]}
              onPress={openButtonContainer}
            >
              <View style={[styles.groupParent, styles.parentPosition]}>
                <Image
                  style={styles.frameItem}
                  contentFit="cover"
                  source={require("../assets/group-70351.png")}
                />
                <Text
                  style={[styles.declinoAsistencia, styles.signInSpaceBlock]}
                >
                  Declino asistencia
                </Text>
              </View>
            </Pressable>
            <LinearGradient
              style={[styles.button1, styles.buttonLayout]}
              locations={[0, 1]}
              colors={["#dee274", "#7ec18c"]}
            >
              <Pressable
                style={[styles.pressable, styles.pressableLayout]}
                onPress={openButtonContainer1}
              >
                <View style={[styles.vectorParent, styles.parentPosition]}>
                  <Image
                    style={styles.vectorIcon}
                    contentFit="cover"
                    source={require("../assets/vector33.png")}
                  />
                  <Text style={[styles.signIn, styles.signTypo]}>
                    Confirmo asistencia
                  </Text>
                </View>
              </Pressable>
            </LinearGradient>
          </View>
          <LinearGradient
            style={[styles.button2, styles.buttonParentPosition]}
            locations={[0, 1]}
            colors={["#dee274", "#7ec18c"]}
          >
            <Pressable
              style={[styles.pressable1, styles.pressableLayout]}
              onPress={openButtonContainer2}
            >
              <Text style={[styles.signIn1, styles.signTypo]}>
                No estoy aún seguro
              </Text>
            </Pressable>
          </LinearGradient>
        </View>
        <Image
          style={[styles.navigationIcon, styles.buttonParentPosition]}
          contentFit="cover"
          source={require("../assets/navigation16.png")}
        />
      </View>

      <Modal animationType="fade" transparent visible={buttonContainerVisible}>
        <View style={styles.buttonContainerOverlay}>
          <Pressable
            style={styles.buttonContainerBg}
            onPress={closeButtonContainer}
          />
          <AsistenciaActualizada onClose={closeButtonContainer} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={buttonContainer1Visible}>
        <View style={styles.buttonContainer1Overlay}>
          <Pressable
            style={styles.buttonContainer1Bg}
            onPress={closeButtonContainer1}
          />
          <AsistenciaActualizada onClose={closeButtonContainer1} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={buttonContainer2Visible}>
        <View style={styles.buttonContainer2Overlay}>
          <Pressable
            style={styles.buttonContainer2Bg}
            onPress={closeButtonContainer2}
          />
          <AsistenciaActualizada onClose={closeButtonContainer2} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  parentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  frameParentPosition: {
    left: 20,
    position: "absolute",
  },
  buttonParentPosition: {
    left: 0,
    position: "absolute",
  },
  cdigoTypo: {
    textAlign: "left",
    fontFamily: FontFamily.lato,
    letterSpacing: 0,
  },
  hsTypo: {
    lineHeight: 19,
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.gris,
    fontFamily: FontFamily.lato,
    fontWeight: "500",
    letterSpacing: 0,
  },
  parentPosition: {
    left: "50%",
    alignItems: "center",
    position: "absolute",
  },
  buttonLayout: {
    height: 52,
    width: 184,
  },
  signInSpaceBlock: {
    marginLeft: 8,
    lineHeight: 21,
    fontSize: FontSize.size_sm,
    letterSpacing: 0,
  },
  pressableLayout: {
    backgroundColor: Color.linearBoton,
    borderRadius: Border.br_11xl,
    width: "100%",
  },
  signTypo: {
    color: Color.white,
    textAlign: "center",
    fontFamily: FontFamily.lato,
  },
  image6Icon: {
    width: 87,
    height: 55,
  },
  image6Wrapper: {
    top: 3,
    left: 20,
    position: "absolute",
  },
  frameChild: {
    top: 44,
    borderColor: Color.secundario,
    borderTopWidth: 1,
    width: 369,
    height: 1,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  tituloDelEvento: {
    top: 64,
    color: Color.gris,
    fontWeight: "500",
    lineHeight: 22,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    fontFamily: FontFamily.lato,
    letterSpacing: 0,
    left: 0,
    position: "absolute",
  },
  calendarIcon: {
    width: 24,
    height: 24,
  },
  hs: {
    marginLeft: 35,
  },
  deAgostoParent: {
    marginLeft: 13,
    flexDirection: "row",
  },
  calendarParent: {
    top: 106,
    alignItems: "center",
    flexDirection: "row",
  },
  iconlybulklocation: {
    width: 21,
    height: 25,
  },
  lugarDelEvento: {
    marginLeft: 16,
  },
  iconlybulklocationParent: {
    top: 150,
    alignItems: "center",
    flexDirection: "row",
  },
  cdigo: {
    top: 195,
    color: Color.gris,
    fontWeight: "500",
    lineHeight: 22,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    fontFamily: FontFamily.lato,
    letterSpacing: 0,
    left: 0,
    position: "absolute",
  },
  observaciones: {
    left: 0,
    position: "absolute",
    top: 0,
  },
  field: {
    marginLeft: -194,
    top: 24,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.fAFAFA,
    height: 107,
    width: 388,
  },
  fieldWithTitle: {
    top: 237,
    height: 131,
    width: 388,
  },
  icon: {
    height: "100%",
  },
  invitacin1: {
    fontSize: FontSize.size_xl,
    fontWeight: "700",
    color: Color.primario1,
    marginLeft: 5,
    lineHeight: 24,
    textAlign: "left",
    fontFamily: FontFamily.lato,
    letterSpacing: 0,
  },
  backParent: {
    top: 0,
    left: 0,
    flexDirection: "row",
  },
  lineParent: {
    height: 368,
    top: 0,
    left: 0,
    width: 388,
  },
  buttonContainerOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  buttonContainerBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  frameItem: {
    width: 12,
    height: 12,
  },
  declinoAsistencia: {
    textAlign: "center",
    marginLeft: 8,
    lineHeight: 21,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.lato,
  },
  groupParent: {
    marginLeft: -65,
    top: 14,
    flexDirection: "row",
  },
  button: {
    borderColor: Color.colorKhaki_100,
    borderWidth: 1,
    borderRadius: Border.br_11xl,
    height: 52,
    width: 184,
    borderStyle: "solid",
    backgroundColor: Color.white,
  },
  buttonContainer1Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  buttonContainer1Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  vectorIcon: {
    width: 18,
    height: 14,
  },
  signIn: {
    marginLeft: 8,
    lineHeight: 21,
    fontSize: FontSize.size_sm,
    letterSpacing: 0,
    color: Color.white,
  },
  vectorParent: {
    marginLeft: -73,
    top: 15,
    flexDirection: "row",
  },
  pressable: {
    height: "100%",
  },
  button1: {
    marginLeft: 20,
  },
  buttonParent: {
    top: 388,
    flexDirection: "row",
  },
  buttonContainer2Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  buttonContainer2Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  signIn1: {
    letterSpacing: 1,
    lineHeight: 24,
    color: Color.white,
    fontSize: FontSize.size_base,
  },
  pressable1: {
    justifyContent: "center",
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_sm,
    alignItems: "center",
    flexDirection: "row",
  },
  button2: {
    top: 460,
    width: 388,
  },
  frameParent: {
    top: 78,
    height: 512,
    width: 388,
  },
  navigationIcon: {
    top: 821,
    width: 428,
    height: 105,
  },
  invitacin: {
    borderRadius: Border.br_31xl,
    flex: 1,
    height: 926,
    backgroundColor: Color.white,
    width: "100%",
  },
});

export default Invitacin;
