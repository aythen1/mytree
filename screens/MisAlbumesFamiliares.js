import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const MisAlbumesFamiliares = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.misAlbumesFamiliares}>
      <View style={styles.frameParent}>
        <View style={styles.parentLayout}>
          <Text style={[styles.lbumFamiliar2023, styles.nuestraTypo]}>
            Álbum familiar 2023
          </Text>
          <Image
            style={[styles.frameChild, styles.frameChildPosition]}
            contentFit="cover"
            source={require("../assets/line-782.png")}
          />
          <Image
            style={[styles.iconlyboldedit, styles.iconlyboldeditLayout]}
            contentFit="cover"
            source={require("../assets/iconlyboldedit.png")}
          />
          <View style={[styles.maskGroupParent, styles.maskGroupFlexBox]}>
            <Image
              style={styles.maskGroupLayout}
              contentFit="cover"
              source={require("../assets/mask-group14.png")}
            />
            <Image
              style={[styles.maskGroupIcon1, styles.maskGroupLayout]}
              contentFit="cover"
              source={require("../assets/mask-group14.png")}
            />
            <Image
              style={[styles.maskGroupIcon1, styles.maskGroupLayout]}
              contentFit="cover"
              source={require("../assets/mask-group14.png")}
            />
          </View>
        </View>
        <View style={[styles.nuestraInfanciaParent, styles.parentLayout]}>
          <Text style={[styles.nuestraInfancia, styles.nuestraTypo]}>
            Nuestra infancia
          </Text>
          <Image
            style={[styles.frameChild, styles.frameChildPosition]}
            contentFit="cover"
            source={require("../assets/line-782.png")}
          />
          <Image
            style={[styles.iconlyboldedit, styles.iconlyboldeditLayout]}
            contentFit="cover"
            source={require("../assets/iconlyboldedit.png")}
          />
          <View style={[styles.maskGroupGroup, styles.maskGroupFlexBox]}>
            <Image
              style={styles.maskGroupLayout}
              contentFit="cover"
              source={require("../assets/mask-group14.png")}
            />
            <Image
              style={[styles.maskGroupIcon1, styles.maskGroupLayout]}
              contentFit="cover"
              source={require("../assets/mask-group14.png")}
            />
            <Image
              style={[styles.maskGroupIcon1, styles.maskGroupLayout]}
              contentFit="cover"
              source={require("../assets/mask-group14.png")}
            />
          </View>
        </View>
        <View style={styles.nuestraEvolucinParent}>
          <Text style={[styles.nuestraEvolucin, styles.nuestraTypo]}>
            Nuestra evolución
          </Text>
          <Text style={[styles.hace10Aos, styles.hace10AosTypo]}>
            Hace 10 años...
          </Text>
          <Text style={[styles.actualidad, styles.hace10AosTypo]}>
            Actualidad
          </Text>
          <Image
            style={[styles.frameChild, styles.frameChildPosition]}
            contentFit="cover"
            source={require("../assets/line-782.png")}
          />
          <Image
            style={[styles.iconlyboldedit2, styles.iconlyboldeditLayout]}
            contentFit="cover"
            source={require("../assets/iconlyboldedit.png")}
          />
          <View style={[styles.maskGroupContainer, styles.frameViewPosition]}>
            <Image
              style={styles.maskGroupLayout}
              contentFit="cover"
              source={require("../assets/mask-group14.png")}
            />
            <Image
              style={[styles.maskGroupIcon1, styles.maskGroupLayout]}
              contentFit="cover"
              source={require("../assets/mask-group14.png")}
            />
            <Image
              style={[styles.maskGroupIcon1, styles.maskGroupLayout]}
              contentFit="cover"
              source={require("../assets/mask-group14.png")}
            />
          </View>
          <View style={[styles.frameView, styles.frameViewPosition]}>
            <Image
              style={styles.maskGroupLayout}
              contentFit="cover"
              source={require("../assets/mask-group14.png")}
            />
            <Image
              style={[styles.maskGroupIcon1, styles.maskGroupLayout]}
              contentFit="cover"
              source={require("../assets/mask-group14.png")}
            />
            <Image
              style={[styles.maskGroupIcon1, styles.maskGroupLayout]}
              contentFit="cover"
              source={require("../assets/mask-group14.png")}
            />
          </View>
          <View style={[styles.frameChild1, styles.maskGroupFlexBox]} />
        </View>
      </View>
      <View style={[styles.misAlbumesFamiliaresChild, styles.tabsBarLayout]} />
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
      <Text style={[styles.brunoPham, styles.brunoPhamTypo]}>Bruno Pham</Text>
      <Text style={[styles.daNangVietnam, styles.miInfoTypo]}>
        Da Nang, Vietnam
      </Text>
      <View style={[styles.tabsBar, styles.tabsBarLayout]}>
        <Pressable
          style={[styles.tabs, styles.tabsFlexBox]}
          onPress={() => navigation.navigate("Perfil1")}
        >
          <Text style={[styles.miLegado, styles.miInfoLayout]}>Mi Legado</Text>
        </Pressable>
        <Pressable
          style={styles.misLbumesWrapper}
          onPress={() => navigation.navigate("MisAlbumes1")}
        >
          <Text style={[styles.misLbumes, styles.signInTypo]}>Mis álbumes</Text>
        </Pressable>
        <Pressable
          style={[styles.tabs1, styles.tabsFlexBox]}
          onPress={() => navigation.navigate("PERFILMIINFO")}
        >
          <Text style={[styles.miInfo, styles.miInfoLayout]}>Mi info</Text>
        </Pressable>
        <View style={[styles.tabsBarChild, styles.tabsPosition]} />
        <View style={[styles.tabsBarItem, styles.tabsPosition]} />
      </View>
      <LinearGradient
        style={[styles.button, styles.buttonFlexBox]}
        locations={[0, 1]}
        colors={["#e2e57a", "#7fc08b"]}
      >
        <Text style={[styles.signIn, styles.signInTypo]}>Salud</Text>
      </LinearGradient>
      <Image
        style={[styles.misAlbumesFamiliaresItem, styles.frameChildPosition]}
        contentFit="cover"
        source={require("../assets/group-1171276683.png")}
      />
      <Image
        style={[styles.misAlbumesFamiliaresInner, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group-1171276684.png")}
      />
      <Image
        style={[styles.groupIcon, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group-1171276684.png")}
      />
      <Image
        style={[styles.navigationIcon, styles.tabsBarLayout]}
        contentFit="cover"
        source={require("../assets/navigation5.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  nuestraTypo: {
    textAlign: "center",
    color: Color.negro,
    fontFamily: FontFamily.lato,
    lineHeight: 24,
    fontSize: FontSize.size_xl,
  },
  frameChildPosition: {
    maxHeight: "100%",
    left: "50%",
    position: "absolute",
  },
  iconlyboldeditLayout: {
    maxWidth: "100%",
    top: "0%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  maskGroupFlexBox: {
    flexDirection: "row",
    position: "absolute",
  },
  maskGroupLayout: {
    height: 140,
    width: 132,
  },
  parentLayout: {
    height: 184,
    width: 406,
  },
  hace10AosTypo: {
    color: Color.gris,
    lineHeight: 22,
    fontSize: FontSize.size_lg,
    left: 1,
    textAlign: "center",
    fontFamily: FontFamily.lato,
    fontWeight: "500",
    position: "absolute",
  },
  frameViewPosition: {
    left: 1,
    flexDirection: "row",
    position: "absolute",
  },
  tabsBarLayout: {
    width: 428,
    position: "absolute",
  },
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
    height: 24,
    width: 24,
  },
  brunoPhamTypo: {
    fontWeight: "700",
    position: "absolute",
  },
  miInfoTypo: {
    letterSpacing: 0,
    color: Color.gris,
    textAlign: "center",
    fontFamily: FontFamily.lato,
  },
  tabsFlexBox: {
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_9xs,
    borderRadius: Border.br_7xs,
    justifyContent: "center",
    flexDirection: "row",
    top: 0,
    alignItems: "center",
    position: "absolute",
  },
  miInfoLayout: {
    lineHeight: 19,
    fontSize: FontSize.size_base,
  },
  signInTypo: {
    color: Color.white,
    letterSpacing: 0,
    textAlign: "center",
    fontFamily: FontFamily.lato,
  },
  tabsPosition: {
    height: 1,
    borderTopWidth: 1,
    borderColor: Color.backgroundPrimaryBackground,
    borderStyle: "solid",
    top: 39,
    position: "absolute",
  },
  groupIconLayout: {
    height: 50,
    width: 50,
    top: 139,
    position: "absolute",
  },
  lbumFamiliar2023: {
    left: 114,
    fontWeight: "500",
    color: Color.negro,
    fontFamily: FontFamily.lato,
    lineHeight: 24,
    fontSize: FontSize.size_xl,
    top: 0,
    position: "absolute",
  },
  frameChild: {
    marginLeft: -203,
    top: 32,
    width: 406,
    maxHeight: "100%",
  },
  iconlyboldedit: {
    height: "10.87%",
    width: "4.93%",
    right: "0.74%",
    bottom: "89.13%",
    left: "94.33%",
  },
  maskGroupIcon1: {
    marginLeft: 5,
  },
  maskGroupParent: {
    left: -3,
    top: 44,
  },
  nuestraInfancia: {
    left: 131,
    fontWeight: "500",
    color: Color.negro,
    fontFamily: FontFamily.lato,
    lineHeight: 24,
    fontSize: FontSize.size_xl,
    top: 0,
    position: "absolute",
  },
  maskGroupGroup: {
    left: 0,
    top: 44,
  },
  nuestraInfanciaParent: {
    marginTop: 20,
  },
  nuestraEvolucin: {
    left: 124,
    fontWeight: "500",
    color: Color.negro,
    fontFamily: FontFamily.lato,
    lineHeight: 24,
    fontSize: FontSize.size_xl,
    top: 0,
    position: "absolute",
  },
  hace10Aos: {
    top: 44,
  },
  actualidad: {
    top: 223,
  },
  iconlyboldedit2: {
    height: "5.13%",
    width: "4.9%",
    right: "0.25%",
    bottom: "94.87%",
    left: "94.85%",
  },
  maskGroupContainer: {
    top: 71,
  },
  frameView: {
    top: 257,
  },
  frameChild1: {
    top: 398,
    left: 2,
    backgroundColor: Color.white,
  },
  nuestraEvolucinParent: {
    width: 408,
    height: 390,
    marginTop: 20,
  },
  frameParent: {
    top: 400,
    left: 10,
    height: 546,
    alignItems: "center",
    position: "absolute",
  },
  misAlbumesFamiliaresChild: {
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowRadius: 25,
    elevation: 25,
    shadowOpacity: 1,
    height: 380,
    left: 0,
    top: 0,
    width: 428,
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
  icon: {
    height: "100%",
    width: "100%",
  },
  vectorParent: {
    top: 20,
    left: 296,
  },
  brunoPham: {
    top: 244,
    left: 159,
    textAlign: "center",
    color: Color.negro,
    fontFamily: FontFamily.lato,
    lineHeight: 24,
    fontSize: FontSize.size_xl,
    fontWeight: "700",
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
    width: 110,
    letterSpacing: 0,
    color: Color.gris,
    textAlign: "center",
    fontFamily: FontFamily.lato,
  },
  tabs: {
    width: 142,
    left: 0,
  },
  misLbumes: {
    marginTop: -9.5,
    marginLeft: -44,
    top: "50%",
    lineHeight: 19,
    fontSize: FontSize.size_base,
    fontWeight: "700",
    position: "absolute",
    left: "50%",
  },
  misLbumesWrapper: {
    left: 142,
    backgroundColor: Color.secundario,
    height: 39,
    width: 142,
    borderRadius: Border.br_7xs,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  miInfo: {
    letterSpacing: 0,
    color: Color.gris,
    textAlign: "center",
    fontFamily: FontFamily.lato,
  },
  tabs1: {
    left: 284,
    width: 144,
  },
  tabsBarChild: {
    width: 148,
    left: 0,
  },
  tabsBarItem: {
    left: 279,
    width: 150,
  },
  tabsBar: {
    marginLeft: -214,
    top: 320,
    height: 40,
    left: "50%",
    backgroundColor: Color.white,
  },
  signIn: {
    fontSize: FontSize.size_xs,
    lineHeight: 18,
  },
  button: {
    top: 272,
    left: 328,
    borderRadius: Border.br_11xl,
    width: 80,
    height: 28,
    paddingHorizontal: Padding.p_base,
    paddingTop: Padding.p_6xs,
    paddingBottom: Padding.p_5xs,
    backgroundColor: Color.linearBoton,
  },
  misAlbumesFamiliaresItem: {
    height: "12.96%",
    marginLeft: -60,
    top: "11.23%",
    bottom: "75.81%",
    width: 120,
  },
  misAlbumesFamiliaresInner: {
    left: 40,
  },
  groupIcon: {
    left: 338,
  },
  navigationIcon: {
    top: 821,
    height: 105,
    left: 0,
  },
  misAlbumesFamiliares: {
    borderRadius: Border.br_31xl,
    flex: 1,
    height: 926,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default MisAlbumesFamiliares;
