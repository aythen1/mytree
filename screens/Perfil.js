import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Padding, Border, FontSize } from "../GlobalStyles";

const Perfil = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.perfil}>
      <View style={styles.perfilChild} />
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
      <View style={[styles.vectorParent, styles.buttonFlexBox]}>
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
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
        style={[styles.perfilItem, styles.tabsBarPosition]}
        contentFit="cover"
        source={require("../assets/group-1171276683.png")}
      />
      <Image
        style={[styles.perfilInner, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group-11712766771.png")}
      />
      <Image
        style={[styles.groupIcon, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group-11712766771.png")}
      />
      <Text style={styles.brunoPham}>Bruno Pham</Text>
      <Text style={[styles.daNangVietnam, styles.miInfoTypo]}>
        Da Nang, Vietnam
      </Text>
      <View style={[styles.tabsBar, styles.tabsBarPosition]}>
        <Pressable
          style={[styles.miLegadoWrapper, styles.tabsFlexBox]}
          onPress={() => navigation.navigate("Perfil1")}
        >
          <Text style={[styles.miLegado, styles.signInTypo]}>Mi Legado</Text>
        </Pressable>
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
      <View style={styles.frameParent}>
        <View style={styles.frameGroup}>
          <View
            style={[styles.miBiografaActualParent, styles.groupParentFlexBox]}
          >
            <Text style={styles.miBiografaActual}>Mi biografía actual</Text>
            <View style={[styles.vectorGroup, styles.groupParentFlexBox]}>
              <Image
                style={styles.vectorIcon1}
                contentFit="cover"
                source={require("../assets/vector53.png")}
              />
              <Image
                style={styles.vectorIcon1}
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
          <View style={[styles.maskGroupParent, styles.groupParentFlexBox]}>
            <Image
              style={styles.maskGroupIcon}
              contentFit="cover"
              source={require("../assets/mask-group18.png")}
            />
            <Image
              style={styles.maskGroupIcon}
              contentFit="cover"
              source={require("../assets/mask-group19.png")}
            />
            <Image
              style={styles.maskGroupIcon}
              contentFit="cover"
              source={require("../assets/mask-group20.png")}
            />
            <Image
              style={styles.maskGroupIcon}
              contentFit="cover"
              source={require("../assets/mask-group21.png")}
            />
            <Image
              style={styles.vectorIcon2}
              contentFit="cover"
              source={require("../assets/vector54.png")}
            />
          </View>
        </View>
        <View style={styles.frameContainer}>
          <View
            style={[styles.miBiografaActualParent, styles.groupParentFlexBox]}
          >
            <Text style={styles.miBiografaActual}>Mis recuerdos</Text>
            <Image
              style={styles.vectorIcon1}
              contentFit="cover"
              source={require("../assets/iconlyboldedit.png")}
            />
          </View>
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={require("../assets/line-78.png")}
          />
          <View style={[styles.maskGroupParent, styles.groupParentFlexBox]}>
            <Image
              style={styles.maskGroupIcon}
              contentFit="cover"
              source={require("../assets/farita3.png")}
            />
            <Image
              style={styles.maskGroupIcon}
              contentFit="cover"
              source={require("../assets/marie.png")}
            />
            <Image
              style={styles.maskGroupIcon}
              contentFit="cover"
              source={require("../assets/farita4.png")}
            />
            <Image
              style={styles.maskGroupIcon}
              contentFit="cover"
              source={require("../assets/claire.png")}
            />
            <Image
              style={styles.vectorIcon2}
              contentFit="cover"
              source={require("../assets/vector54.png")}
            />
          </View>
        </View>
        <View style={styles.frameContainer}>
          <View
            style={[styles.miBiografaActualParent, styles.groupParentFlexBox]}
          >
            <Text style={styles.miBiografaActual}>Mis etapas</Text>
            <Image
              style={styles.vectorIcon1}
              contentFit="cover"
              source={require("../assets/iconlyboldedit.png")}
            />
          </View>
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={require("../assets/line-78.png")}
          />
          <View style={[styles.maskGroupParent, styles.groupParentFlexBox]}>
            <Image
              style={styles.maskGroupIcon}
              contentFit="cover"
              source={require("../assets/farita3.png")}
            />
            <Image
              style={styles.maskGroupIcon}
              contentFit="cover"
              source={require("../assets/marie.png")}
            />
            <Image
              style={styles.maskGroupIcon}
              contentFit="cover"
              source={require("../assets/farita4.png")}
            />
            <Image
              style={styles.maskGroupIcon}
              contentFit="cover"
              source={require("../assets/claire.png")}
            />
            <Image
              style={styles.vectorIcon2}
              contentFit="cover"
              source={require("../assets/vector54.png")}
            />
          </View>
        </View>
      </View>
      <Image
        style={styles.navigationIcon}
        contentFit="cover"
        source={require("../assets/navigation35.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
    left: 20,
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
  tabsBarPosition: {
    left: "50%",
    position: "absolute",
  },
  groupIconLayout: {
    height: 50,
    width: 50,
    top: 139,
    position: "absolute",
  },
  miInfoTypo: {
    color: Color.gris,
    letterSpacing: 0,
    textAlign: "center",
    fontFamily: FontFamily.lato,
  },
  tabsFlexBox: {
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_9xs,
    borderRadius: Border.br_7xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    top: 0,
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
  groupParentFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  perfilChild: {
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowRadius: 25,
    elevation: 25,
    shadowOpacity: 1,
    height: 379,
    width: 428,
    left: 0,
    top: 0,
    position: "absolute",
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
  vectorIcon: {
    height: 24,
  },
  iconlylightOutlineplus: {
    marginLeft: 20,
    height: 24,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  vectorParent: {
    top: 20,
    left: 296,
  },
  perfilItem: {
    height: "12.96%",
    marginLeft: -60,
    top: "11.23%",
    bottom: "75.81%",
    width: 120,
    maxHeight: "100%",
  },
  perfilInner: {
    left: 40,
  },
  groupIcon: {
    left: 338,
  },
  brunoPham: {
    top: 244,
    left: 159,
    textAlign: "center",
    color: Color.negro,
    fontFamily: FontFamily.lato,
    fontWeight: "700",
    lineHeight: 24,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  daNangVietnam: {
    top: 274,
    left: 153,
    fontWeight: "300",
    fontSize: FontSize.size_base,
    letterSpacing: 0,
    lineHeight: 24,
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
    color: Color.gris,
    letterSpacing: 0,
    textAlign: "center",
    fontFamily: FontFamily.lato,
  },
  tabs: {
    left: 142,
    width: 142,
    paddingHorizontal: Padding.p_9xs,
    borderRadius: Border.br_7xs,
  },
  miInfo: {
    color: Color.gris,
    letterSpacing: 0,
    textAlign: "center",
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
    borderColor: Color.backgroundPrimaryBackground,
    borderTopWidth: 1,
    width: 298,
    height: 1,
    position: "absolute",
  },
  tabsBar: {
    marginLeft: -214,
    top: 318,
    height: 40,
    width: 428,
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
  miBiografaActual: {
    fontWeight: "500",
    textAlign: "left",
    color: Color.negro,
    fontFamily: FontFamily.lato,
    lineHeight: 24,
    fontSize: FontSize.size_xl,
  },
  vectorIcon1: {
    width: 20,
    height: 20,
  },
  vectorGroup: {
    width: 59,
    height: 24,
    alignItems: "center",
  },
  miBiografaActualParent: {
    width: 388,
  },
  frameChild: {
    marginTop: 20,
    width: 388,
    maxHeight: "100%",
  },
  maskGroupIcon: {
    width: 70,
    height: 70,
  },
  vectorIcon2: {
    width: 30,
    height: 30,
  },
  maskGroupParent: {
    width: 387,
    marginTop: 20,
    alignItems: "center",
  },
  frameGroup: {
    width: 388,
    alignItems: "center",
  },
  frameContainer: {
    marginTop: 20,
    width: 388,
    alignItems: "center",
  },
  frameParent: {
    top: 399,
    left: 19,
    position: "absolute",
  },
  navigationIcon: {
    bottom: 0,
    height: 105,
    width: 428,
    left: 0,
    position: "absolute",
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

export default Perfil;
