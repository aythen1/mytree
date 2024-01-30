import React, { useState, useCallback } from "react";
import { Text, StyleSheet, View, Pressable, Modal } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import OpcionesIdioma from "../components/OpcionesIdioma";
import OpcionesFormatoFecha from "../components/OpcionesFormatoFecha";
import OpcionesZonaHoraria from "../components/OpcionesZonaHoraria";
import OpcionesInicioDeSemana from "../components/OpcionesInicioDeSemana";
import OpcionesCulturas from "../components/OpcionesCulturas";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border, Padding } from "../GlobalStyles";

const CALENDARIOAJUSTES = () => {
  const [vectorIconVisible, setVectorIconVisible] = useState(false);
  const [vectorIcon2Visible, setVectorIcon2Visible] = useState(false);
  const [vectorIcon3Visible, setVectorIcon3Visible] = useState(false);
  const [vectorIcon4Visible, setVectorIcon4Visible] = useState(false);
  const [vectorIcon5Visible, setVectorIcon5Visible] = useState(false);
  const navigation = useNavigation();

  const openVectorIcon = useCallback(() => {
    setVectorIconVisible(true);
  }, []);

  const closeVectorIcon = useCallback(() => {
    setVectorIconVisible(false);
  }, []);

  const openVectorIcon2 = useCallback(() => {
    setVectorIcon2Visible(true);
  }, []);

  const closeVectorIcon2 = useCallback(() => {
    setVectorIcon2Visible(false);
  }, []);

  const openVectorIcon3 = useCallback(() => {
    setVectorIcon3Visible(true);
  }, []);

  const closeVectorIcon3 = useCallback(() => {
    setVectorIcon3Visible(false);
  }, []);

  const openVectorIcon4 = useCallback(() => {
    setVectorIcon4Visible(true);
  }, []);

  const closeVectorIcon4 = useCallback(() => {
    setVectorIcon4Visible(false);
  }, []);

  const openVectorIcon5 = useCallback(() => {
    setVectorIcon5Visible(true);
  }, []);

  const closeVectorIcon5 = useCallback(() => {
    setVectorIcon5Visible(false);
  }, []);

  return (
    <>
      <View style={styles.calendarioAjustes}>
        <View style={[styles.frameParent, styles.parentPosition]}>
          <View style={[styles.frameGroup, styles.frameParentFlexBox]}>
            <View style={styles.idiomaParent}>
              <Text style={[styles.idioma, styles.idiomaTypo]}>Idioma</Text>
              <Text style={[styles.espaol, styles.idiomaTypo]}>Español</Text>
            </View>
            <Pressable style={styles.vector} onPress={openVectorIcon}>
              <Image
                style={styles.iconLayout}
                contentFit="cover"
                source={require("../assets/vector47.png")}
              />
            </Pressable>
          </View>
          <View style={[styles.frameContainer, styles.frameParentFlexBox]}>
            <View style={styles.idiomaParent}>
              <Text style={[styles.idioma, styles.idiomaTypo]}>Región</Text>
              <Text style={[styles.espaol, styles.idiomaTypo]}>España</Text>
            </View>
            <Image
              style={styles.vector}
              contentFit="cover"
              source={require("../assets/vector47.png")}
            />
          </View>
          <View style={[styles.frameView, styles.frameParentFlexBox]}>
            <View style={styles.idiomaParent}>
              <Text style={[styles.idioma, styles.idiomaTypo]}>
                Formato de Fecha y Hora
              </Text>
              <Text style={[styles.espaol, styles.idiomaTypo]}>
                MM/dd/aaaa hh:mm:ss tt
              </Text>
            </View>
            <Pressable style={styles.vector} onPress={openVectorIcon2}>
              <Image
                style={styles.iconLayout}
                contentFit="cover"
                source={require("../assets/vector47.png")}
              />
            </Pressable>
          </View>
          <Image
            style={[styles.frameChild, styles.frameChildLayout]}
            contentFit="cover"
            source={require("../assets/line-78.png")}
          />
          <View style={[styles.frameParent1, styles.frameParentFlexBox]}>
            <View style={styles.idiomaParent}>
              <Text style={[styles.idioma, styles.idiomaTypo]}>
                Zona horaria
              </Text>
              <Text style={[styles.espaol, styles.idiomaTypo]}>GMT +1</Text>
            </View>
            <Pressable style={styles.vector} onPress={openVectorIcon3}>
              <Image
                style={styles.iconLayout}
                contentFit="cover"
                source={require("../assets/vector47.png")}
              />
            </Pressable>
          </View>
          <View style={[styles.frameParent2, styles.frameParentFlexBox]}>
            <View style={styles.idiomaParent}>
              <Text style={[styles.idioma, styles.idiomaTypo]}>
                Inicio de semana
              </Text>
              <Text style={[styles.espaol, styles.idiomaTypo]}>Domingo</Text>
            </View>
            <Pressable style={styles.vector} onPress={openVectorIcon4}>
              <Image
                style={styles.iconLayout}
                contentFit="cover"
                source={require("../assets/vector47.png")}
              />
            </Pressable>
          </View>
          <Image
            style={[styles.frameItem, styles.frameChildLayout]}
            contentFit="cover"
            source={require("../assets/line-78.png")}
          />
          <View style={[styles.frameParent3, styles.frameParentFlexBox]}>
            <View style={styles.idiomaParent}>
              <Text style={[styles.idioma, styles.idiomaTypo]}>Cultura</Text>
              <Text style={[styles.espaol, styles.idiomaTypo]}>
                Anglosajona
              </Text>
            </View>
            <Pressable style={styles.vector} onPress={openVectorIcon5}>
              <Image
                style={styles.iconLayout}
                contentFit="cover"
                source={require("../assets/vector47.png")}
              />
            </Pressable>
          </View>
          <Image
            style={[styles.frameInner, styles.frameChildLayout]}
            contentFit="cover"
            source={require("../assets/line-78.png")}
          />
          <View style={[styles.frameParent4, styles.frameParentFlexBox]}>
            <View style={styles.idiomaParent}>
              <Text style={[styles.idioma, styles.idiomaTypo]}>
                Color de fondo
              </Text>
              <Text style={[styles.espaol, styles.idiomaTypo]}>
                Por defecto
              </Text>
            </View>
            <Image
              style={styles.vector}
              contentFit="cover"
              source={require("../assets/vector47.png")}
            />
          </View>
          <Image
            style={[styles.lineIcon, styles.frameChildLayout]}
            contentFit="cover"
            source={require("../assets/line-78.png")}
          />
          <View style={[styles.frameParent5, styles.frameParentFlexBox]}>
            <View style={styles.idiomaParent}>
              <Text style={[styles.idioma, styles.idiomaTypo]}>
                Añadir calendario laboral según población
              </Text>
              <Text style={[styles.espaol, styles.idiomaTypo]}>
                Desactivado
              </Text>
            </View>
            <Image
              style={styles.vector}
              contentFit="cover"
              source={require("../assets/vector47.png")}
            />
          </View>
          <Image
            style={[styles.frameChild1, styles.frameChildLayout]}
            contentFit="cover"
            source={require("../assets/line-78.png")}
          />
          <View style={[styles.frameParent6, styles.frameParentFlexBox]}>
            <View style={styles.idiomaParent}>
              <Text style={[styles.idioma, styles.idiomaTypo]}>
                Notificación con dos semanas previas
              </Text>
              <Text style={[styles.espaol, styles.idiomaTypo]}>
                Desactivado
              </Text>
            </View>
            <Image
              style={styles.vector}
              contentFit="cover"
              source={require("../assets/vector47.png")}
            />
          </View>
          <LinearGradient
            style={[styles.button, styles.frameChildPosition]}
            locations={[0, 1]}
            colors={["#dee274", "#7ec18c"]}
          >
            <Pressable
              style={[styles.pressable, styles.frameChildFlexBox]}
              onPress={() => navigation.navigate("CALENDARIO")}
            >
              <Text style={styles.signIn}>Guardar</Text>
            </Pressable>
          </LinearGradient>
          <View style={[styles.frameChild2, styles.frameChildFlexBox]} />
          <View style={[styles.frameChild3, styles.frameChildFlexBox]} />
        </View>
        <View
          style={[styles.calendarioAjustesChild, styles.navigationIconPosition]}
        />
        <View style={[styles.backParent, styles.frameChildFlexBox]}>
          <Pressable
            style={styles.back}
            onPress={() => navigation.navigate("CALENDARIO")}
          >
            <Image
              style={[styles.icon5, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/back.png")}
            />
          </Pressable>
          <Text style={[styles.ajustesDelCalendario, styles.idiomaTypo]}>
            Ajustes del calendario
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
            styles.frameParentFlexBox,
          ]}
        >
          <Image
            style={styles.back}
            contentFit="cover"
            source={require("../assets/iconlylightoutlinecalendar6.png")}
          />
          <Image
            style={[styles.documentIcon, styles.documentIconLayout]}
            contentFit="cover"
            source={require("../assets/document13.png")}
          />
          <Image
            style={styles.documentIconLayout}
            contentFit="cover"
            source={require("../assets/iconlylightoutlinesetting1.png")}
          />
        </View>
        <Image
          style={[styles.navigationIcon, styles.navigationIconPosition]}
          contentFit="cover"
          source={require("../assets/navigation37.png")}
        />
      </View>

      <Modal animationType="fade" transparent visible={vectorIconVisible}>
        <View style={styles.vectorIconOverlay}>
          <Pressable style={styles.vectorIconBg} onPress={closeVectorIcon} />
          <OpcionesIdioma onClose={closeVectorIcon} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={vectorIcon2Visible}>
        <View style={styles.vectorIcon2Overlay}>
          <Pressable style={styles.vectorIcon2Bg} onPress={closeVectorIcon2} />
          <OpcionesFormatoFecha onClose={closeVectorIcon2} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={vectorIcon3Visible}>
        <View style={styles.vectorIcon3Overlay}>
          <Pressable style={styles.vectorIcon3Bg} onPress={closeVectorIcon3} />
          <OpcionesZonaHoraria onClose={closeVectorIcon3} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={vectorIcon4Visible}>
        <View style={styles.vectorIcon4Overlay}>
          <Pressable style={styles.vectorIcon4Bg} onPress={closeVectorIcon4} />
          <OpcionesInicioDeSemana onClose={closeVectorIcon4} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={vectorIcon5Visible}>
        <View style={styles.vectorIcon5Overlay}>
          <Pressable style={styles.vectorIcon5Bg} onPress={closeVectorIcon5} />
          <OpcionesCulturas onClose={closeVectorIcon5} />
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
  frameParentFlexBox: {
    justifyContent: "flex-end",
    flexDirection: "row",
    position: "absolute",
  },
  idiomaTypo: {
    textAlign: "left",
    fontFamily: FontFamily.lato,
  },
  frameChildLayout: {
    maxHeight: "100%",
    left: 0,
    width: 388,
    position: "absolute",
  },
  frameChildPosition: {
    left: 0,
    position: "absolute",
  },
  frameChildFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  navigationIconPosition: {
    width: 428,
    left: 0,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  documentIconLayout: {
    marginLeft: 30,
    height: 24,
    width: 24,
  },
  idioma: {
    color: Color.negro,
    textAlign: "left",
    fontWeight: "500",
    lineHeight: 19,
    letterSpacing: 0,
    fontSize: FontSize.size_base,
    alignSelf: "stretch",
  },
  espaol: {
    color: Color.grisGeneral,
    marginTop: 10,
    fontWeight: "500",
    lineHeight: 19,
    letterSpacing: 0,
    fontSize: FontSize.size_base,
    alignSelf: "stretch",
  },
  idiomaParent: {
    width: 347,
  },
  vectorIconOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  vectorIconBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  vector: {
    width: 21,
    height: 21,
    marginLeft: 20,
  },
  frameGroup: {
    alignItems: "center",
    justifyContent: "flex-end",
    left: 0,
    top: 0,
  },
  frameContainer: {
    top: 68,
    alignItems: "center",
    justifyContent: "flex-end",
    left: 0,
  },
  vectorIcon2Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  vectorIcon2Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  frameView: {
    top: 136,
    alignItems: "center",
    justifyContent: "flex-end",
    left: 0,
  },
  frameChild: {
    top: 204,
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
  frameParent1: {
    top: 224,
    alignItems: "center",
    justifyContent: "flex-end",
    left: 0,
  },
  vectorIcon4Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  vectorIcon4Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  frameParent2: {
    top: 292,
    alignItems: "center",
    justifyContent: "flex-end",
    left: 0,
  },
  frameItem: {
    top: 360,
  },
  vectorIcon5Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  vectorIcon5Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  frameParent3: {
    top: 380,
    alignItems: "center",
    justifyContent: "flex-end",
    left: 0,
  },
  frameInner: {
    top: 448,
  },
  frameParent4: {
    top: 468,
    alignItems: "center",
    justifyContent: "flex-end",
    left: 0,
  },
  lineIcon: {
    top: 536,
  },
  frameParent5: {
    top: 556,
    alignItems: "center",
    justifyContent: "flex-end",
    left: 0,
  },
  frameChild1: {
    top: 624,
  },
  frameParent6: {
    top: 644,
    alignItems: "center",
    justifyContent: "flex-end",
    left: 0,
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
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
  },
  button: {
    top: 712,
    width: 388,
  },
  frameChild2: {
    top: 784,
    left: 0,
    position: "absolute",
    backgroundColor: Color.white,
  },
  frameChild3: {
    top: 836,
    left: 0,
    position: "absolute",
    backgroundColor: Color.white,
  },
  frameParent: {
    top: 133,
    height: 782,
    width: 388,
  },
  calendarioAjustesChild: {
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowRadius: 25,
    elevation: 25,
    shadowOpacity: 1,
    height: 113,
    top: 0,
    backgroundColor: Color.white,
  },
  icon5: {
    overflow: "hidden",
  },
  back: {
    height: 24,
    width: 24,
  },
  ajustesDelCalendario: {
    fontSize: FontSize.size_5xl,
    fontWeight: "700",
    width: 241,
    marginLeft: 20,
    color: Color.negro,
    textAlign: "left",
  },
  backParent: {
    top: 64,
    flexDirection: "row",
    justifyContent: "center",
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
    left: 219,
    width: 189,
    alignItems: "flex-end",
  },
  navigationIcon: {
    top: 821,
    height: 105,
  },
  calendarioAjustes: {
    borderRadius: Border.br_31xl,
    height: 926,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.white,
  },
});

export default CALENDARIOAJUSTES;
