import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Padding, Border } from "../GlobalStyles";

const Perfil1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.perfil}>
      <View style={[styles.frameParent, styles.iconPosition]}>
        <View style={[styles.frameGroup, styles.frameLayout]}>
          <View style={styles.miBiografaActualParent}>
            <Text style={styles.miBiografaActual}>Mi biografía actual</Text>
            <View style={styles.vectorParent}>
              <Pressable
                style={styles.vector}
                onPress={() => navigation.navigate("Perfil")}
              >
                <Image
                  style={styles.icon}
                  contentFit="cover"
                  source={require("../assets/vector53.png")}
                />
              </Pressable>
              <Image
                style={styles.vector}
                contentFit="cover"
                source={require("../assets/iconlyboldedit.png")}
              />
            </View>
          </View>
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={require("../assets/line-78.png")}
          />
          <Text style={styles.laFotoQueTypo}>
            La foto que marca el inicio de tu biografía
          </Text>
        </View>
        <View style={[styles.frameContainer, styles.frameLayout]}>
          <View style={styles.miBiografaActualParent}>
            <Text style={styles.miBiografaActual}>Mis recuerdos</Text>
            <View style={styles.vectorParent}>
              <Pressable
                style={styles.vector}
                onPress={() => navigation.navigate("Perfil")}
              >
                <Image
                  style={styles.icon}
                  contentFit="cover"
                  source={require("../assets/vector53.png")}
                />
              </Pressable>
              <Image
                style={styles.vector}
                contentFit="cover"
                source={require("../assets/iconlyboldedit.png")}
              />
            </View>
          </View>
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={require("../assets/line-78.png")}
          />
          <Text style={styles.laFotoQueTypo}>
            Captura la magia de tu infancia
          </Text>
        </View>
        <View style={[styles.frameContainer, styles.frameLayout]}>
          <View style={styles.miBiografaActualParent}>
            <Text style={styles.miBiografaActual}>Mis etapas</Text>
            <View style={styles.vectorParent}>
              <Pressable
                style={styles.vector}
                onPress={() => navigation.navigate("Perfil")}
              >
                <Image
                  style={styles.icon}
                  contentFit="cover"
                  source={require("../assets/vector53.png")}
                />
              </Pressable>
              <Image
                style={styles.vector}
                contentFit="cover"
                source={require("../assets/iconlyboldedit.png")}
              />
            </View>
          </View>
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={require("../assets/line-78.png")}
          />
          <Text style={[styles.viajaAlPasado, styles.laFotoQueTypo]}>
            Viaja al pasado de tu infancia para que tu familia lo vea
          </Text>
        </View>
      </View>
      <Image
        style={[styles.navigationIcon, styles.tabsBarLayout]}
        contentFit="cover"
        source={require("../assets/navigation1.png")}
      />
      <View style={styles.groupChildPosition}>
        <View style={[styles.groupChild, styles.groupChildPosition]} />
        <Image
          style={[styles.ionmenuIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/ionmenu.png")}
        />
        <Image
          style={[styles.image6Icon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/image-6.png")}
        />
        <View style={[styles.vectorParent1, styles.buttonFlexBox]}>
          <Image
            style={styles.vectorIconLayout}
            contentFit="cover"
            source={require("../assets/vector9.png")}
          />
          <Image
            style={[styles.iconlylightOutlineplus, styles.vectorIconLayout]}
            contentFit="cover"
            source={require("../assets/iconlylightoutlineplus1.png")}
          />
          <Pressable
            style={[styles.iconlylightOutlineplus, styles.vectorIconLayout]}
            onPress={() => navigation.navigate("PERFILAJUSTES")}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/iconlylightoutlinesetting1.png")}
            />
          </Pressable>
        </View>
        <Image
          style={[styles.groupItem, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/group-11712766771.png")}
        />
        <Image
          style={[styles.groupInner, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/group-11712766771.png")}
        />
        <View style={styles.groupParent}>
          <Image
            style={styles.groupIcon}
            contentFit="cover"
            source={require("../assets/group-1171276678.png")}
          />
          <Text style={styles.brunoPham}>Bruno Pham</Text>
          <Text style={[styles.daNangVietnam, styles.miInfoTypo]}>
            Da Nang, Vietnam
          </Text>
        </View>
        <View style={[styles.tabsBar, styles.tabsBarLayout]}>
          <View style={[styles.miLegadoWrapper, styles.tabsFlexBox]}>
            <Text style={[styles.miLegado, styles.signInTypo]}>Mi Legado</Text>
          </View>
          <Pressable
            style={[styles.tabs, styles.tabsFlexBox]}
            onPress={() => navigation.navigate("MisAlbumes1")}
          >
            <Text style={[styles.misLbumes, styles.miInfoLayout]}>
              Mis álbumes
            </Text>
          </Pressable>
          <Pressable
            style={[styles.tabs1, styles.tabsFlexBox]}
            onPress={() => navigation.navigate("PERFILMIINFO")}
          >
            <Text style={[styles.miInfo, styles.miInfoLayout]}>Mi info</Text>
          </Pressable>
          <View style={styles.tabsBarChild} />
        </View>
        <LinearGradient
          style={[styles.button, styles.buttonFlexBox]}
          locations={[0, 1]}
          colors={["#e2e57a", "#7fc08b"]}
        >
          <Text style={[styles.signIn, styles.signInTypo]}>Salud</Text>
        </LinearGradient>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
    left: 20,
    position: "absolute",
  },
  frameLayout: {
    width: 388,
    alignItems: "center",
  },
  laFotoQueTypo: {
    textAlign: "center",
    color: Color.gris,
    fontStyle: "italic",
    lineHeight: 22,
    fontSize: FontSize.size_lg,
    marginTop: 20,
    fontFamily: FontFamily.lato,
    fontWeight: "500",
  },
  tabsBarLayout: {
    width: 428,
    position: "absolute",
  },
  groupChildPosition: {
    height: 379,
    top: 0,
    width: 428,
    left: 0,
    position: "absolute",
  },
  buttonFlexBox: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  vectorIconLayout: {
    width: 24,
    height: 24,
  },
  groupLayout: {
    height: 50,
    width: 50,
    top: 139,
    position: "absolute",
  },
  miInfoTypo: {
    letterSpacing: 0,
    textAlign: "center",
    color: Color.gris,
    fontFamily: FontFamily.lato,
  },
  tabsFlexBox: {
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_9xs,
    borderRadius: Border.br_7xs,
    justifyContent: "center",
    top: 0,
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  signInTypo: {
    color: Color.white,
    letterSpacing: 0,
    textAlign: "center",
    fontFamily: FontFamily.lato,
  },
  miInfoLayout: {
    lineHeight: 19,
    fontSize: FontSize.size_base,
  },
  miBiografaActual: {
    textAlign: "left",
    color: Color.negro,
    fontFamily: FontFamily.lato,
    fontWeight: "500",
    lineHeight: 24,
    fontSize: FontSize.size_xl,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  vector: {
    width: 20,
    height: 20,
  },
  vectorParent: {
    width: 59,
    height: 24,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  miBiografaActualParent: {
    justifyContent: "space-between",
    flexDirection: "row",
    width: 388,
  },
  frameChild: {
    maxHeight: "100%",
    marginTop: 20,
    width: 388,
  },
  frameGroup: {
    alignItems: "center",
  },
  frameContainer: {
    marginTop: 69,
    alignItems: "center",
  },
  viajaAlPasado: {
    width: 316,
  },
  frameParent: {
    top: 399,
    height: 334,
  },
  navigationIcon: {
    bottom: 0,
    height: 105,
    left: 0,
  },
  groupChild: {
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowRadius: 25,
    elevation: 25,
    shadowOpacity: 1,
    backgroundColor: Color.white,
  },
  ionmenuIcon: {
    top: 64,
    width: 26,
    height: 20,
    overflow: "hidden",
  },
  image6Icon: {
    top: 3,
    width: 87,
    height: 55,
  },
  iconlylightOutlineplus: {
    marginLeft: 20,
  },
  vectorParent1: {
    top: 20,
    left: 296,
  },
  groupItem: {
    left: 40,
  },
  groupInner: {
    left: 338,
  },
  groupIcon: {
    width: 120,
    height: 120,
  },
  brunoPham: {
    marginTop: 13,
    fontWeight: "700",
    textAlign: "center",
    color: Color.negro,
    fontFamily: FontFamily.lato,
    lineHeight: 24,
    fontSize: FontSize.size_xl,
  },
  daNangVietnam: {
    fontWeight: "300",
    fontSize: FontSize.size_base,
    letterSpacing: 0,
    marginTop: 13,
    lineHeight: 24,
  },
  groupParent: {
    top: 104,
    left: 153,
    alignItems: "center",
    position: "absolute",
  },
  miLegado: {
    lineHeight: 19,
    fontSize: FontSize.size_base,
    fontWeight: "700",
    color: Color.white,
  },
  miLegadoWrapper: {
    backgroundColor: Color.secundario,
    width: 142,
    paddingHorizontal: Padding.p_9xs,
    borderRadius: Border.br_7xs,
    left: 0,
    overflow: "hidden",
  },
  misLbumes: {
    width: 110,
    letterSpacing: 0,
    textAlign: "center",
    color: Color.gris,
    fontFamily: FontFamily.lato,
  },
  tabs: {
    left: 142,
    width: 142,
    paddingHorizontal: Padding.p_9xs,
    borderRadius: Border.br_7xs,
  },
  miInfo: {
    letterSpacing: 0,
    textAlign: "center",
    color: Color.gris,
    fontFamily: FontFamily.lato,
  },
  tabs1: {
    left: 284,
    width: 144,
    paddingHorizontal: Padding.p_9xs,
    borderRadius: Border.br_7xs,
  },
  tabsBarChild: {
    top: 39,
    left: 131,
    borderStyle: "solid",
    borderColor: Color.secundario,
    borderTopWidth: 1,
    width: 298,
    height: 1,
    position: "absolute",
  },
  tabsBar: {
    marginLeft: -214,
    top: 318,
    left: "50%",
    height: 40,
    backgroundColor: Color.white,
  },
  signIn: {
    fontSize: FontSize.size_xs,
    lineHeight: 18,
  },
  button: {
    top: 270,
    left: 328,
    borderRadius: Border.br_11xl,
    width: 80,
    height: 28,
    paddingHorizontal: Padding.p_base,
    paddingTop: Padding.p_6xs,
    paddingBottom: Padding.p_5xs,
    backgroundColor: Color.linearBoton,
  },
  perfil: {
    borderRadius: Border.br_31xl,
    flex: 1,
    height: 926,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default Perfil1;
