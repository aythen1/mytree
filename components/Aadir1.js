import * as React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const Aadir1 = ({ onClose }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.aadir}>
      <View style={styles.frameParent}>
        <Pressable
          style={[styles.frameWrapper, styles.frameWrapperFlexBox]}
          onPress={() => navigation.navigate("AadirRecuerdo1")}
        >
          <View style={[styles.groupParent, styles.groupParentFlexBox]}>
            <Image
              style={styles.iconLayout}
              contentFit="cover"
              source={require("../assets/group-11712766891.png")}
            />
            <Text style={styles.aadirRecuerdo}>Añadir recuerdo</Text>
          </View>
        </Pressable>
        <Pressable
          style={[styles.frameContainer, styles.frameFlexBox]}
          onPress={() => navigation.navigate("BOTONInvitarAmigos1")}
        >
          <View
            style={[
              styles.iconlylightOutline3UserParent,
              styles.groupParentFlexBox,
            ]}
          >
            <Image
              style={styles.iconlylightOutline3User}
              contentFit="cover"
              source={require("../assets/iconlylightoutline3user2.png")}
            />
            <Text style={styles.aadirRecuerdo}>Invitar familiar</Text>
          </View>
        </Pressable>
        <View style={[styles.frameView, styles.frameFlexBox]}>
          <Pressable
            style={[styles.frameGroup, styles.groupParentFlexBox]}
            onPress={() => navigation.navigate("PERFILCREARIDINFANTEANCE")}
          >
            <View style={styles.vectorWrapper}>
              <Image
                style={[styles.vectorIcon, styles.vectorIconPosition]}
                contentFit="cover"
                source={require("../assets/vector45.png")}
              />
            </View>
            <Text style={styles.aadirRecuerdo}>Crear ID Infante/Ancestro</Text>
          </Pressable>
        </View>
        <Pressable
          style={[styles.framePressable, styles.frameFlexBox]}
          onPress={() => navigation.navigate("MIDIARIOPANTALLAPERSONAL")}
        >
          <View style={[styles.documentParent, styles.groupParentFlexBox]}>
            <Image
              style={[styles.documentIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/document5.png")}
            />
            <Text style={styles.aadirRecuerdo}>Crear entrada al Diario</Text>
          </View>
        </Pressable>
        <Pressable
          style={[styles.frameWrapper1, styles.frameFlexBox]}
          onPress={() => navigation.navigate("CrearEvento")}
        >
          <View
            style={[
              styles.iconlylightOutlinecalendarParent,
              styles.groupParentFlexBox,
            ]}
          >
            <Image
              style={styles.iconLayout}
              contentFit="cover"
              source={require("../assets/iconlylightoutlinecalendar3.png")}
            />
            <Text style={styles.aadirRecuerdo}>{`Crear Evento Familiar `}</Text>
          </View>
        </Pressable>
        <Pressable
          style={[styles.frameWrapper2, styles.vectorIconPosition]}
          onPress={() => navigation.navigate("MUROALERTAS1")}
        >
          <View style={[styles.notificationParent, styles.groupParentFlexBox]}>
            <Image
              style={styles.notificationIcon}
              contentFit="cover"
              source={require("../assets/notification5.png")}
            />
            <Text style={styles.aadirRecuerdo}>Crear Alerta Familiar</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameWrapperFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  groupParentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  frameFlexBox: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  vectorIconPosition: {
    left: 0,
    position: "absolute",
  },
  iconLayout: {
    height: 30,
    width: 30,
  },
  aadirRecuerdo: {
    fontSize: FontSize.size_base,
    letterSpacing: 0,
    lineHeight: 19,
    fontWeight: "900",
    fontFamily: FontFamily.lato,
    color: Color.white,
    textAlign: "justify",
    marginLeft: 20,
    flex: 1,
  },
  groupParent: {
    width: 164,
  },
  frameWrapper: {
    zIndex: 0,
  },
  iconlylightOutline3User: {
    height: 27,
    width: 30,
  },
  iconlylightOutline3UserParent: {
    width: 153,
  },
  frameContainer: {
    zIndex: 1,
  },
  vectorIcon: {
    top: 0,
    height: 30,
    width: 30,
    zIndex: 0,
  },
  vectorWrapper: {
    width: 30,
    flexDirection: "row",
  },
  frameGroup: {
    width: 234,
  },
  frameView: {
    zIndex: 2,
  },
  documentIcon: {
    overflow: "hidden",
  },
  documentParent: {
    width: 210,
  },
  framePressable: {
    zIndex: 3,
  },
  iconlylightOutlinecalendarParent: {
    width: 201,
  },
  frameWrapper1: {
    zIndex: 4,
  },
  notificationIcon: {
    height: 35,
    width: 30,
  },
  notificationParent: {
    width: 195,
  },
  frameWrapper2: {
    top: 247,
    zIndex: 5,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  frameParent: {
    alignSelf: "stretch",
    flex: 1,
  },
  aadir: {
    borderRadius: Border.br_11xl,
    width: 428,
    height: 321,
    padding: Padding.p_xl,
    maxWidth: "100%",
    maxHeight: "100%",
  },
});

export default Aadir1;
