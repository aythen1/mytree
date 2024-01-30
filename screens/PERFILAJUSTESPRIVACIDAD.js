import React, { useState, useCallback } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text, Modal } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import ENTRADACREADA from "../components/ENTRADACREADA";
import { FontSize, FontFamily, Color, Padding, Border } from "../GlobalStyles";

const PERFILAJUSTESPRIVACIDAD = () => {
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
      <View style={styles.perfilAjustesPrivacidad}>
        <Image
          style={[styles.hugeIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/hugeicon.png")}
        />
        <View style={[styles.frameParent, styles.parentPosition]}>
          <View style={[styles.image6Parent, styles.parentFlexBox]}>
            <Image
              style={styles.image6Icon}
              contentFit="cover"
              source={require("../assets/image-6.png")}
            />
            <View
              style={[
                styles.iconlylightOutlinecalendarParent,
                styles.frameGroupFlexBox,
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
          <View style={[styles.backParent, styles.pressableFlexBox]}>
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
            <Text style={styles.privacidad}>Privacidad</Text>
          </View>
        </View>
        <View
          style={[styles.quinPuedeVerTuInformacinParent, styles.parentPosition]}
        >
          <Text style={[styles.quinPuedeVer, styles.quinTypo]}>
            Quién puede ver tu información personal
          </Text>
          <View style={[styles.frameGroup, styles.frameGroupFlexBox]}>
            <View style={styles.nombreCompletoParent}>
              <Text style={[styles.quinPuedeVer, styles.quinTypo]}>
                Nombre completo
              </Text>
              <Text style={[styles.todos, styles.quinTypo]}>Todos</Text>
            </View>
            <Image
              style={styles.vectorIcon}
              contentFit="cover"
              source={require("../assets/vector47.png")}
            />
          </View>
          <View style={[styles.frameGroup, styles.frameGroupFlexBox]}>
            <View style={styles.nombreCompletoParent}>
              <Text style={[styles.quinPuedeVer, styles.quinTypo]}>
                Fecha de nacimiento
              </Text>
              <Text style={[styles.todos, styles.quinTypo]}>Todos</Text>
            </View>
            <Image
              style={styles.vectorIcon}
              contentFit="cover"
              source={require("../assets/vector47.png")}
            />
          </View>
          <View style={[styles.frameGroup, styles.frameGroupFlexBox]}>
            <View style={styles.nombreCompletoParent}>
              <Text style={[styles.quinPuedeVer, styles.quinTypo]}>
                Ubicación
              </Text>
              <Text style={[styles.todos, styles.quinTypo]}>Todos</Text>
            </View>
            <Image
              style={styles.vectorIcon}
              contentFit="cover"
              source={require("../assets/vector47.png")}
            />
          </View>
          <Image
            style={[styles.frameChild, styles.buttonLayout]}
            contentFit="cover"
            source={require("../assets/line-802.png")}
          />
          <Text style={[styles.quinPuedeEtiquetarte, styles.quinTypo]}>
            Quién puede etiquetarte
          </Text>
          <View style={[styles.frameGroup, styles.frameGroupFlexBox]}>
            <View style={styles.nombreCompletoParent}>
              <Text style={[styles.quinPuedeVer, styles.quinTypo]}>Fotos</Text>
              <Text style={[styles.todos, styles.quinTypo]}>Sólo Familia</Text>
            </View>
            <Image
              style={styles.vectorIcon}
              contentFit="cover"
              source={require("../assets/vector47.png")}
            />
          </View>
          <View style={[styles.frameGroup, styles.frameGroupFlexBox]}>
            <View style={styles.nombreCompletoParent}>
              <Text style={[styles.quinPuedeVer, styles.quinTypo]}>Videos</Text>
              <Text style={[styles.todos, styles.quinTypo]}>Sólo Amigos</Text>
            </View>
            <Image
              style={styles.vectorIcon}
              contentFit="cover"
              source={require("../assets/vector47.png")}
            />
          </View>
          <Image
            style={[styles.frameChild, styles.buttonLayout]}
            contentFit="cover"
            source={require("../assets/line-802.png")}
          />
          <View style={[styles.frameGroup, styles.frameGroupFlexBox]}>
            <View style={styles.nombreCompletoParent}>
              <Text style={[styles.quinPuedeVer, styles.quinTypo]}>
                Familiares bloqueados
              </Text>
              <Text style={[styles.todos, styles.quinTypo]}>10</Text>
            </View>
            <Image
              style={styles.vectorIcon}
              contentFit="cover"
              source={require("../assets/vector47.png")}
            />
          </View>
          <View style={[styles.frameGroup, styles.frameGroupFlexBox]}>
            <View style={styles.nombreCompletoParent}>
              <Text style={[styles.quinPuedeVer, styles.quinTypo]}>
                Familiares restringidos
              </Text>
              <Text style={[styles.todos, styles.quinTypo]}>10</Text>
            </View>
            <Image
              style={styles.vectorIcon}
              contentFit="cover"
              source={require("../assets/vector47.png")}
            />
          </View>
          <View style={[styles.frameParent5, styles.parentFlexBox]}>
            <View style={[styles.image6Parent, styles.parentFlexBox]}>
              <Text style={[styles.quinPuedeVer, styles.quinTypo]}>
                Deseo estar en los motores de búsqueda
              </Text>
            </View>
            <View style={styles.check}>
              <View style={styles.checkChild} />
              <Image
                style={[styles.vectorIcon7, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/vector.png")}
              />
            </View>
          </View>
          <LinearGradient
            style={styles.buttonLayout}
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
        <Image
          style={styles.navigationIcon}
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
  iconLayout: {
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  parentPosition: {
    left: "50%",
    marginLeft: -214,
    position: "absolute",
  },
  parentFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  frameGroupFlexBox: {
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  documentIconLayout: {
    marginLeft: 30,
    height: 24,
    width: 24,
  },
  pressableFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  quinTypo: {
    fontWeight: "500",
    lineHeight: 19,
    letterSpacing: 0,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.lato,
  },
  buttonLayout: {
    width: 388,
    marginTop: 20,
  },
  hugeIcon: {
    height: "2.59%",
    width: "5.61%",
    top: "65.55%",
    right: "65.42%",
    bottom: "31.86%",
    left: "28.97%",
    maxHeight: "100%",
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
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  privacidad: {
    fontSize: FontSize.size_5xl,
    fontWeight: "700",
    marginLeft: 20,
    textAlign: "left",
    fontFamily: FontFamily.lato,
    color: Color.negro,
  },
  backParent: {
    marginTop: 20,
  },
  frameParent: {
    top: 0,
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
  },
  quinPuedeVer: {
    color: Color.negro,
    lineHeight: 19,
    letterSpacing: 0,
  },
  todos: {
    color: Color.grisGeneral,
    marginTop: 10,
  },
  nombreCompletoParent: {
    width: 347,
  },
  vectorIcon: {
    width: 21,
    height: 21,
    marginLeft: 20,
  },
  frameGroup: {
    marginTop: 20,
    alignItems: "center",
  },
  frameChild: {
    maxHeight: "100%",
  },
  quinPuedeEtiquetarte: {
    color: Color.negro,
    lineHeight: 19,
    letterSpacing: 0,
    marginTop: 20,
  },
  checkChild: {
    height: "105%",
    width: "105%",
    top: "-2.5%",
    right: "-2.5%",
    bottom: "-2.5%",
    left: "-2.5%",
    borderRadius: 3,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro_100,
    borderWidth: 1,
    position: "absolute",
    backgroundColor: Color.white,
  },
  vectorIcon7: {
    height: "34.5%",
    width: "45%",
    top: "35%",
    right: "30%",
    bottom: "30.5%",
    left: "25%",
    maxHeight: "100%",
  },
  check: {
    width: 20,
    height: 20,
    marginLeft: 85,
  },
  frameParent5: {
    marginTop: 20,
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
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.lato,
    flex: 1,
  },
  pressable: {
    borderRadius: Border.br_11xl,
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_sm,
    backgroundColor: Color.linearBoton,
    width: "100%",
  },
  quinPuedeVerTuInformacinParent: {
    top: 127,
    padding: Padding.p_xl,
  },
  navigationIcon: {
    top: 821,
    left: 0,
    width: 428,
    height: 105,
    position: "absolute",
  },
  perfilAjustesPrivacidad: {
    borderRadius: Border.br_31xl,
    height: 926,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.white,
  },
});

export default PERFILAJUSTESPRIVACIDAD;
