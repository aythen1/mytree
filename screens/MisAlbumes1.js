import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Padding, Border } from "../GlobalStyles";

const MisAlbumes1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.misAlbumes}>
      <View style={styles.frameParent}>
        <View style={styles.frameGroup}>
          <View style={[styles.tYYoParent, styles.parentFlexBox]}>
            <Text style={[styles.tYYo, styles.tYYoClr]}>Tú y yo</Text>
            <View style={styles.vectorParent}>
              <Pressable
                style={styles.vector}
                onPress={() => navigation.navigate("MisAlbumes")}
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
          <Text style={[styles.expresaTuAmor, styles.brunoPhamTypo]}>
            Expresa tu amor: añade tu historia con tu pareja
          </Text>
        </View>
        <View style={styles.frameContainer}>
          <View style={[styles.tYYoParent, styles.parentFlexBox]}>
            <Text style={[styles.tYYo, styles.tYYoClr]}>Familiares</Text>
            <View style={styles.vectorParent}>
              <Pressable
                style={styles.vector}
                onPress={() => navigation.navigate("MisAlbumes")}
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
          <Text style={[styles.construyeYComparte, styles.faritaParentLayout]}>
            Construye y comparte la historia de tu familia, desde el pasado
            hasta el presente
          </Text>
        </View>
        <View style={styles.frameContainer}>
          <View style={[styles.tYYoParent, styles.parentFlexBox]}>
            <Text style={[styles.tYYo, styles.tYYoClr]}>Amigos</Text>
            <View style={styles.vectorParent}>
              <Pressable
                style={styles.vector}
                onPress={() => navigation.navigate("MisAlbumes")}
              >
                <Image
                  style={styles.icon}
                  contentFit="cover"
                  source={require("../assets/vector53.png")}
                />
              </Pressable>
              <Pressable
                style={styles.vector}
                onPress={() => navigation.navigate("Perfil")}
              >
                <Image
                  style={styles.icon}
                  contentFit="cover"
                  source={require("../assets/iconlyboldedit.png")}
                />
              </Pressable>
            </View>
          </View>
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={require("../assets/line-78.png")}
          />
          <Text style={[styles.expresaTuAmor, styles.brunoPhamTypo]}>
            Comienza un viaje compartido con tu familia elegida
          </Text>
        </View>
        <View style={styles.frameContainer}>
          <View style={[styles.tYYoParent, styles.parentFlexBox]}>
            <Text style={[styles.tYYo, styles.tYYoClr]}>
              Fotos con quien aparezco
            </Text>
            <Image
              style={styles.vector}
              contentFit="cover"
              source={require("../assets/iconlyboldedit.png")}
            />
          </View>
          <Image
            style={styles.lineIcon}
            contentFit="cover"
            source={require("../assets/line-78.png")}
          />
          <View style={[styles.faritaParent, styles.faritaParentLayout]}>
            <Image
              style={styles.faritaIcon}
              contentFit="cover"
              source={require("../assets/farita3.png")}
            />
            <Image
              style={styles.faritaIcon}
              contentFit="cover"
              source={require("../assets/marie.png")}
            />
            <Image
              style={styles.faritaIcon}
              contentFit="cover"
              source={require("../assets/farita4.png")}
            />
            <Image
              style={styles.faritaIcon}
              contentFit="cover"
              source={require("../assets/claire.png")}
            />
            <Image
              style={styles.vectorIcon}
              contentFit="cover"
              source={require("../assets/vector54.png")}
            />
          </View>
        </View>
      </View>
      <View style={styles.misAlbumesChild} />
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
          style={styles.vectorIcon1Layout}
          contentFit="cover"
          source={require("../assets/vector9.png")}
        />
        <Pressable
          style={[styles.iconlylightOutlineplus, styles.vectorIcon1Layout]}
          onPress={() => navigation.navigate("CrearAlbum")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/iconlylightoutlineplus1.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.iconlylightOutlineplus, styles.vectorIcon1Layout]}
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
      <View style={[styles.tabsBar, styles.misPosition]}>
        <Pressable
          style={[styles.tabs, styles.tabsFlexBox]}
          onPress={() => navigation.navigate("Perfil1")}
        >
          <Text style={[styles.miLegado, styles.miInfoLayout]}>Mi Legado</Text>
        </Pressable>
        <View style={styles.misLbumesWrapper}>
          <Text style={[styles.misLbumes, styles.signInTypo]}>Mis álbumes</Text>
        </View>
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
        style={[styles.misAlbumesItem, styles.misPosition]}
        contentFit="cover"
        source={require("../assets/group-1171276683.png")}
      />
      <Image
        style={[styles.misAlbumesInner, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group-11712766771.png")}
      />
      <Image
        style={[styles.groupIcon, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group-11712766771.png")}
      />
      <Image
        style={styles.navigationIcon}
        contentFit="cover"
        source={require("../assets/navigation1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  parentFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  tYYoClr: {
    color: Color.negro,
    lineHeight: 24,
    fontSize: FontSize.size_xl,
  },
  brunoPhamTypo: {
    textAlign: "center",
    fontFamily: FontFamily.lato,
  },
  faritaParentLayout: {
    width: 387,
    marginTop: 20,
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
  vectorIcon1Layout: {
    width: 24,
    height: 24,
  },
  miInfoTypo: {
    letterSpacing: 0,
    textAlign: "center",
    color: Color.gris,
    fontFamily: FontFamily.lato,
  },
  misPosition: {
    left: "50%",
    position: "absolute",
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
  tYYo: {
    textAlign: "left",
    fontFamily: FontFamily.lato,
    fontWeight: "500",
    color: Color.negro,
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
  tYYoParent: {
    width: 388,
  },
  frameChild: {
    marginTop: 20,
    maxHeight: "100%",
    width: 388,
  },
  expresaTuAmor: {
    color: Color.gris,
    fontStyle: "italic",
    lineHeight: 22,
    fontSize: FontSize.size_lg,
    textAlign: "center",
    fontWeight: "500",
    marginTop: 20,
  },
  frameGroup: {
    alignItems: "center",
    width: 388,
  },
  construyeYComparte: {
    textAlign: "center",
    fontFamily: FontFamily.lato,
    color: Color.gris,
    fontStyle: "italic",
    lineHeight: 22,
    fontSize: FontSize.size_lg,
    fontWeight: "500",
  },
  frameContainer: {
    marginTop: 69,
    alignItems: "center",
    width: 388,
  },
  lineIcon: {
    height: 0,
    marginTop: 20,
    width: 388,
  },
  faritaIcon: {
    width: 70,
    height: 70,
  },
  vectorIcon: {
    width: 30,
    height: 30,
  },
  faritaParent: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  frameParent: {
    top: 400,
    left: 18,
    height: 376,
    position: "absolute",
  },
  misAlbumesChild: {
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowRadius: 25,
    elevation: 25,
    shadowOpacity: 1,
    height: 380,
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
  iconlylightOutlineplus: {
    marginLeft: 20,
  },
  vectorParent1: {
    top: 20,
    left: 296,
  },
  brunoPham: {
    top: 244,
    left: 159,
    fontWeight: "700",
    color: Color.negro,
    lineHeight: 24,
    fontSize: FontSize.size_xl,
    textAlign: "center",
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
    width: 110,
    letterSpacing: 0,
    textAlign: "center",
    color: Color.gris,
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
    left: "50%",
    position: "absolute",
    fontWeight: "700",
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
    textAlign: "center",
    color: Color.gris,
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
    width: 428,
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
  misAlbumesItem: {
    height: "12.96%",
    marginLeft: -60,
    top: "11.23%",
    bottom: "75.81%",
    width: 120,
    maxHeight: "100%",
  },
  misAlbumesInner: {
    left: 40,
  },
  groupIcon: {
    left: 338,
  },
  navigationIcon: {
    top: 821,
    height: 105,
    width: 428,
    left: 0,
    position: "absolute",
  },
  misAlbumes: {
    borderRadius: Border.br_31xl,
    flex: 1,
    height: 926,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default MisAlbumes1;
