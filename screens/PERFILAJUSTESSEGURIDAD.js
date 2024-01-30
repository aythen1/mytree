import React, { useState, useCallback } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text, Modal } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import ENTRADACREADA from "../components/ENTRADACREADA";
import { FontSize, FontFamily, Color, Padding, Border } from "../GlobalStyles";

const PERFILAJUSTESSEGURIDAD = () => {
  const navigation = useNavigation();
  const [buttonContainerVisible, setButtonContainerVisible] = useState(false);

  const openButtonContainer = useCallback(() => {
    setButtonContainerVisible(true);
  }, []);

  const closeButtonContainer = useCallback(() => {
    setButtonContainerVisible(false);
  }, []);

  return (
    <>
      <View style={styles.perfilAjustesSeguridad}>
        <View style={[styles.frameParent, styles.framePosition]}>
          <View style={styles.image6Parent}>
            <Image
              style={styles.image6Icon}
              contentFit="cover"
              source={require("../assets/image-6.png")}
            />
            <View
              style={[
                styles.iconlylightOutlinecalendarParent,
                styles.frameParentFlexBox,
              ]}
            >
              <Image
                style={styles.iconlylightOutlinecalendar}
                contentFit="cover"
                source={require("../assets/iconlylightoutlinecalendar5.png")}
              />
              <Image
                style={[styles.documentIcon, styles.documentIconLayout]}
                contentFit="cover"
                source={require("../assets/document9.png")}
              />
              <Image
                style={styles.documentIconLayout}
                contentFit="cover"
                source={require("../assets/iconlylightoutlinesetting7.png")}
              />
            </View>
          </View>
          <View style={[styles.backParent, styles.parentFrameSpaceBlock]}>
            <Pressable
              style={styles.iconlylightOutlinecalendar}
              onPress={() => navigation.navigate("PERFILAJUSTES")}
            >
              <Image
                style={styles.icon}
                contentFit="cover"
                source={require("../assets/back.png")}
              />
            </Pressable>
            <Text style={styles.seguridad}>Seguridad</Text>
          </View>
        </View>
        <Image
          style={styles.navigationIcon}
          contentFit="cover"
          source={require("../assets/navigation29.png")}
        />
        <View style={[styles.frameGroup, styles.framePosition]}>
          <View>
            <View style={styles.frameWrapper}>
              <View style={[styles.frameView, styles.frameParentFlexBox]}>
                <View style={styles.contraseaDeMytreeParent}>
                  <Text style={[styles.contraseaDeMytree, styles.textTypo]}>
                    Contraseña de MyTree
                  </Text>
                  <Text style={[styles.text, styles.textTypo]}>
                    *****************
                  </Text>
                </View>
                <Image
                  style={styles.vectorIcon}
                  contentFit="cover"
                  source={require("../assets/vector46.png")}
                />
              </View>
            </View>
            <View style={[styles.frameWrapper1, styles.parentFrameSpaceBlock]}>
              <View style={[styles.frameView, styles.frameParentFlexBox]}>
                <View style={styles.contraseaDeMytreeParent}>
                  <Text style={[styles.contraseaDeMytree, styles.textTypo]}>
                    Contraseña Mi Privado
                  </Text>
                  <Text style={[styles.text, styles.textTypo]}>
                    *****************
                  </Text>
                </View>
                <Image
                  style={styles.vectorIcon}
                  contentFit="cover"
                  source={require("../assets/vector46.png")}
                />
              </View>
            </View>
            <View style={[styles.frameParent2, styles.parentFrameSpaceBlock]}>
              <View style={styles.contraseaDeMytreeParent}>
                <Text style={[styles.contraseaDeMytree, styles.textTypo]}>
                  Verificación dos pasos
                </Text>
                <Text style={[styles.text, styles.textTypo]}>Desactivada</Text>
              </View>
              <Image
                style={styles.vectorIcon}
                contentFit="cover"
                source={require("../assets/vector46.png")}
              />
            </View>
            <View style={[styles.frameParent2, styles.parentFrameSpaceBlock]}>
              <View style={styles.contraseaDeMytreeParent}>
                <Text style={[styles.contraseaDeMytree, styles.textTypo]}>
                  Teléfono
                </Text>
                <Text style={[styles.text, styles.textTypo]}>55523718945</Text>
              </View>
              <Image
                style={styles.vectorIcon}
                contentFit="cover"
                source={require("../assets/vector46.png")}
              />
            </View>
            <View style={[styles.frameParent2, styles.parentFrameSpaceBlock]}>
              <View style={styles.contraseaDeMytreeParent}>
                <Text style={[styles.contraseaDeMytree, styles.textTypo]}>
                  Correo electrónico
                </Text>
                <Text style={[styles.text, styles.textTypo]}>
                  johndoe@correo.com
                </Text>
              </View>
              <Image
                style={styles.vectorIcon}
                contentFit="cover"
                source={require("../assets/vector46.png")}
              />
            </View>
          </View>
          <LinearGradient
            style={styles.button}
            locations={[0, 1]}
            colors={["#dee274", "#7ec18c"]}
          >
            <Pressable style={styles.pressable} onPress={openButtonContainer}>
              <Text style={styles.signIn}>Guardar</Text>
            </Pressable>
          </LinearGradient>
        </View>
      </View>

      <Modal animationType="fade" transparent visible={buttonContainerVisible}>
        <View style={styles.buttonContainerOverlay}>
          <Pressable
            style={styles.buttonContainerBg}
            onPress={closeButtonContainer}
          />
          <ENTRADACREADA onClose={closeButtonContainer} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  framePosition: {
    left: "50%",
    marginLeft: -214,
    position: "absolute",
  },
  frameParentFlexBox: {
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  documentIconLayout: {
    marginLeft: 30,
    height: 24,
    width: 24,
  },
  parentFrameSpaceBlock: {
    marginTop: 20,
    alignItems: "center",
  },
  textTypo: {
    fontWeight: "500",
    lineHeight: 19,
    letterSpacing: 0,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.lato,
  },
  image6Icon: {
    width: 87,
    height: 55,
  },
  iconlylightOutlinecalendar: {
    height: 24,
    width: 24,
  },
  documentIcon: {
    overflow: "hidden",
  },
  iconlylightOutlinecalendarParent: {
    width: 189,
    marginLeft: 112,
  },
  image6Parent: {
    alignItems: "center",
    flexDirection: "row",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  seguridad: {
    fontSize: FontSize.size_5xl,
    fontWeight: "700",
    marginLeft: 20,
    textAlign: "left",
    fontFamily: FontFamily.lato,
    color: Color.negro,
  },
  backParent: {
    justifyContent: "center",
    flexDirection: "row",
  },
  frameParent: {
    top: 3,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    paddingHorizontal: Padding.p_xl,
    paddingBottom: Padding.p_xl,
    backgroundColor: Color.white,
    marginLeft: -214,
  },
  navigationIcon: {
    top: 821,
    left: 0,
    width: 428,
    height: 105,
    position: "absolute",
  },
  contraseaDeMytree: {
    color: Color.negro,
    lineHeight: 19,
    letterSpacing: 0,
  },
  text: {
    color: Color.grisGeneral,
    marginTop: 10,
  },
  contraseaDeMytreeParent: {
    width: 347,
  },
  vectorIcon: {
    width: 21,
    height: 21,
    marginLeft: 20,
  },
  frameView: {
    alignItems: "center",
  },
  frameWrapper: {
    justifyContent: "center",
    alignItems: "center",
  },
  frameWrapper1: {
    justifyContent: "center",
  },
  frameParent2: {
    justifyContent: "flex-end",
    flexDirection: "row",
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
  signIn: {
    letterSpacing: 1,
    lineHeight: 24,
    color: Color.white,
    textAlign: "center",
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.lato,
    flex: 1,
  },
  pressable: {
    borderRadius: Border.br_11xl,
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_sm,
    backgroundColor: Color.linearBoton,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
  },
  button: {
    width: 388,
    marginTop: 302,
  },
  frameGroup: {
    marginTop: -336,
    top: "50%",
    height: 725,
    padding: Padding.p_xl,
    justifyContent: "center",
    alignItems: "center",
  },
  perfilAjustesSeguridad: {
    borderRadius: Border.br_31xl,
    height: 926,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.white,
  },
});

export default PERFILAJUSTESSEGURIDAD;
