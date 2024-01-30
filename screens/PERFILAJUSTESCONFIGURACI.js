import React, { useState, useCallback } from "react";
import { Text, StyleSheet, View, Pressable, Modal } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import ENTRADACREADA from "../components/ENTRADACREADA";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border, Padding } from "../GlobalStyles";

const PERFILAJUSTESCONFIGURACI = () => {
  const [buttonContainerVisible, setButtonContainerVisible] = useState(false);
  const navigation = useNavigation();

  const openButtonContainer = useCallback(() => {
    setButtonContainerVisible(true);
  }, []);

  const closeButtonContainer = useCallback(() => {
    setButtonContainerVisible(false);
  }, []);

  return (
    <>
      <View style={styles.perfilAjustesConfiguraci}>
        <View style={[styles.frameParent, styles.parentPosition]}>
          <View>
            <View
              style={[styles.cambiarFotoDePerfilParent, styles.parentFlexBox]}
            >
              <Text style={[styles.cambiarFotoDe, styles.brunoPhamTypo]}>
                Cambiar foto de perfil
              </Text>
              <Image
                style={[styles.vectorIcon, styles.vectorIconLayout]}
                contentFit="cover"
                source={require("../assets/vector46.png")}
              />
            </View>
            <View style={[styles.frameContainer, styles.frameContainerFlexBox]}>
              <View style={styles.nombreCompletoParent}>
                <Text style={[styles.cambiarFotoDe, styles.brunoPhamTypo]}>
                  Nombre completo
                </Text>
                <Text style={[styles.brunoPham, styles.brunoPhamTypo]}>
                  Bruno Pham
                </Text>
              </View>
              <Image
                style={[styles.vectorIcon1, styles.vectorIconLayout]}
                contentFit="cover"
                source={require("../assets/vector47.png")}
              />
            </View>
            <View style={[styles.frameContainer, styles.frameContainerFlexBox]}>
              <View style={styles.nombreCompletoParent}>
                <Text style={[styles.cambiarFotoDe, styles.brunoPhamTypo]}>
                  Fecha de nacimiento
                </Text>
                <Text style={[styles.brunoPham, styles.brunoPhamTypo]}>
                  02/12/1997
                </Text>
              </View>
              <Image
                style={[styles.vectorIcon1, styles.vectorIconLayout]}
                contentFit="cover"
                source={require("../assets/vector47.png")}
              />
            </View>
            <View style={[styles.frameContainer, styles.frameContainerFlexBox]}>
              <View style={styles.nombreCompletoParent}>
                <Text style={[styles.cambiarFotoDe, styles.brunoPhamTypo]}>
                  Ubicación
                </Text>
                <Text style={[styles.brunoPham, styles.brunoPhamTypo]}>
                  Da Nang, Vietnam
                </Text>
              </View>
              <Image
                style={[styles.vectorIcon1, styles.vectorIconLayout]}
                contentFit="cover"
                source={require("../assets/vector47.png")}
              />
            </View>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require("../assets/line-802.png")}
            />
            <View style={[styles.frameContainer, styles.frameContainerFlexBox]}>
              <View style={styles.nombreCompletoParent}>
                <Text style={[styles.cambiarFotoDe, styles.brunoPhamTypo]}>
                  Madre
                </Text>
                <Text style={[styles.brunoPham, styles.brunoPhamTypo]}>
                  Mary Jane
                </Text>
              </View>
              <Image
                style={[styles.vectorIcon1, styles.vectorIconLayout]}
                contentFit="cover"
                source={require("../assets/vector47.png")}
              />
            </View>
            <View style={[styles.frameContainer, styles.frameContainerFlexBox]}>
              <View style={styles.nombreCompletoParent}>
                <Text style={[styles.cambiarFotoDe, styles.brunoPhamTypo]}>
                  Padre
                </Text>
                <Text style={[styles.brunoPham, styles.brunoPhamTypo]}>
                  Peter Parker
                </Text>
              </View>
              <Image
                style={[styles.vectorIcon1, styles.vectorIconLayout]}
                contentFit="cover"
                source={require("../assets/vector47.png")}
              />
            </View>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require("../assets/line-802.png")}
            />
            <View style={[styles.frameContainer, styles.frameContainerFlexBox]}>
              <View style={styles.nombreCompletoParent}>
                <Text style={[styles.cambiarFotoDe, styles.brunoPhamTypo]}>
                  Hermanos
                </Text>
                <Text style={[styles.brunoPham, styles.brunoPhamTypo]}>
                  Ninguno
                </Text>
              </View>
              <Image
                style={[styles.vectorIcon1, styles.vectorIconLayout]}
                contentFit="cover"
                source={require("../assets/vector47.png")}
              />
            </View>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require("../assets/line-802.png")}
            />
            <View style={[styles.frameContainer, styles.frameContainerFlexBox]}>
              <View style={styles.nombreCompletoParent}>
                <Text style={[styles.cambiarFotoDe, styles.brunoPhamTypo]}>
                  Estado Civíl
                </Text>
                <Text style={[styles.brunoPham, styles.brunoPhamTypo]}>
                  Casado con Pirita García
                </Text>
              </View>
              <Image
                style={[styles.vectorIcon1, styles.vectorIconLayout]}
                contentFit="cover"
                source={require("../assets/vector47.png")}
              />
            </View>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require("../assets/line-802.png")}
            />
            <View style={[styles.frameContainer, styles.frameContainerFlexBox]}>
              <View style={styles.nombreCompletoParent}>
                <Text style={[styles.cambiarFotoDe, styles.brunoPhamTypo]}>
                  Añadir al perfil la familia de la pareja
                </Text>
                <Text style={[styles.brunoPham, styles.brunoPhamTypo]}>
                  Desactivado
                </Text>
              </View>
              <Image
                style={[styles.vectorIcon1, styles.vectorIconLayout]}
                contentFit="cover"
                source={require("../assets/vector47.png")}
              />
            </View>
          </View>
          <View style={[styles.deleteParent, styles.parentFlexBox]}>
            <Image
              style={styles.deleteIcon}
              contentFit="cover"
              source={require("../assets/delete2.png")}
            />
            <Text style={[styles.eliminarDatos, styles.brunoPhamTypo]}>
              Eliminar datos
            </Text>
          </View>
          <LinearGradient
            style={styles.button}
            locations={[0, 1]}
            colors={["#dee274", "#7ec18c"]}
          >
            <Pressable
              style={[styles.pressable, styles.pressableFlexBox]}
              onPress={openButtonContainer}
            >
              <Text style={styles.signIn}>Guardar</Text>
            </Pressable>
          </LinearGradient>
        </View>
        <View
          style={[
            styles.perfilAjustesConfiguraciChild,
            styles.navigationIconPosition,
          ]}
        />
        <View style={[styles.backParent, styles.pressableFlexBox]}>
          <Pressable
            style={styles.back}
            onPress={() => navigation.navigate("PERFILAJUSTES")}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/back.png")}
            />
          </Pressable>
          <Text style={[styles.configuracin, styles.brunoPhamTypo]}>
            Configuración
          </Text>
        </View>
        <Image
          style={[styles.image6Icon, styles.parentPosition]}
          contentFit="cover"
          source={require("../assets/image-6.png")}
        />
        <View
          style={[
            styles.iconlylightOutlinecalendarParent,
            styles.frameContainerFlexBox,
          ]}
        >
          <Image
            style={styles.back}
            contentFit="cover"
            source={require("../assets/iconlylightoutlinecalendar.png")}
          />
          <Image
            style={[styles.documentIcon, styles.documentIconLayout]}
            contentFit="cover"
            source={require("../assets/document11.png")}
          />
          <Image
            style={styles.documentIconLayout}
            contentFit="cover"
            source={require("../assets/iconlylightoutlinesetting.png")}
          />
        </View>
        <Image
          style={[styles.navigationIcon, styles.navigationIconPosition]}
          contentFit="cover"
          source={require("../assets/navigation29.png")}
        />
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
  parentPosition: {
    left: 20,
    position: "absolute",
  },
  parentFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  brunoPhamTypo: {
    textAlign: "left",
    fontFamily: FontFamily.lato,
  },
  vectorIconLayout: {
    height: 21,
    width: 21,
  },
  frameContainerFlexBox: {
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  pressableFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  navigationIconPosition: {
    width: 428,
    left: 0,
    position: "absolute",
  },
  documentIconLayout: {
    marginLeft: 30,
    height: 24,
    width: 24,
  },
  cambiarFotoDe: {
    color: Color.negro,
    textAlign: "left",
    fontWeight: "500",
    letterSpacing: 0,
    lineHeight: 19,
    fontSize: FontSize.size_base,
  },
  vectorIcon: {
    marginLeft: 215,
  },
  cambiarFotoDePerfilParent: {
    alignItems: "center",
  },
  brunoPham: {
    color: Color.grisGeneral,
    marginTop: 10,
    fontWeight: "500",
    letterSpacing: 0,
    lineHeight: 19,
    fontSize: FontSize.size_base,
  },
  nombreCompletoParent: {
    width: 347,
  },
  vectorIcon1: {
    marginLeft: 20,
  },
  frameContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  frameChild: {
    maxHeight: "100%",
    width: 388,
    marginTop: 20,
  },
  deleteIcon: {
    width: 18,
    height: 20,
    overflow: "hidden",
  },
  eliminarDatos: {
    fontSize: FontSize.size_lg,
    lineHeight: 22,
    marginLeft: 15,
    color: Color.negro,
    textAlign: "left",
    fontWeight: "500",
    letterSpacing: 0,
  },
  deleteParent: {
    marginTop: 38,
    alignItems: "center",
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
    fontFamily: FontFamily.lato,
    fontSize: FontSize.size_base,
    flex: 1,
  },
  pressable: {
    borderRadius: Border.br_11xl,
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_sm,
    backgroundColor: Color.linearBoton,
    width: "100%",
  },
  button: {
    marginTop: 38,
    width: 388,
  },
  frameParent: {
    top: 147,
    height: 672,
  },
  perfilAjustesConfiguraciChild: {
    top: 0,
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowRadius: 25,
    elevation: 25,
    shadowOpacity: 1,
    height: 127,
    backgroundColor: Color.white,
    left: 0,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  back: {
    height: 24,
    width: 24,
  },
  configuracin: {
    fontSize: FontSize.size_5xl,
    fontWeight: "700",
    width: 241,
    marginLeft: 20,
    color: Color.negro,
    textAlign: "left",
  },
  backParent: {
    top: 78,
    left: 20,
    position: "absolute",
  },
  image6Icon: {
    top: 3,
    width: 87,
    height: 55,
  },
  documentIcon: {
    overflow: "hidden",
  },
  iconlylightOutlinecalendarParent: {
    top: 20,
    left: 276,
    position: "absolute",
    justifyContent: "flex-end",
  },
  navigationIcon: {
    top: 821,
    height: 105,
  },
  perfilAjustesConfiguraci: {
    borderRadius: Border.br_31xl,
    height: 926,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.white,
  },
});

export default PERFILAJUSTESCONFIGURACI;
