import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Padding, Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const Bsqueda1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.bsqueda}>
      <Image
        style={[styles.navigationIcon, styles.tabsParentPosition]}
        contentFit="cover"
        source={require("../assets/navigation18.png")}
      />
      <View style={[styles.bsquedaChild, styles.tabsParentPosition]} />
      <Image
        style={[styles.image6Icon, styles.image6IconPosition]}
        contentFit="cover"
        source={require("../assets/image-6.png")}
      />
      <View style={styles.backParent}>
        <Pressable
          style={styles.back}
          onPress={() => navigation.navigate("MUROINFORMACIN")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/back.png")}
          />
        </Pressable>
        <Text style={[styles.bsqueda1, styles.bsqueda1Typo]}>Búsqueda</Text>
      </View>
      <View style={styles.header}>
        <View style={styles.searchBar}>
          <Image
            style={styles.iconlylightOutlinesearch}
            contentFit="cover"
            source={require("../assets/iconlylightoutlinesearch4.png")}
          />
          <View style={styles.placeholderInput}>
            <Text style={styles.search}>{`Search `}</Text>
          </View>
        </View>
        <View style={styles.iconlylightsendCopyWrapper}>
          <Image
            style={styles.back}
            contentFit="cover"
            source={require("../assets/iconlylightsend-copy1.png")}
          />
        </View>
      </View>
      <View style={[styles.tabsParent, styles.tabsParentPosition]}>
        <View style={[styles.tabs, styles.tabsFlexBox]}>
          <Text style={[styles.retos, styles.retosTypo]}>Retos</Text>
        </View>
        <Pressable
          style={[styles.contactosWrapper, styles.tabsFlexBox]}
          onPress={() => navigation.navigate("BsquedaContactos")}
        >
          <Text style={[styles.contactos, styles.retosTypo]}>Contactos</Text>
        </Pressable>
        <Pressable
          style={[styles.contactosWrapper, styles.tabsFlexBox]}
          onPress={() => navigation.navigate("BsquedaPublicaciones")}
        >
          <Text style={[styles.contactos, styles.retosTypo]}>
            Publicaciones
          </Text>
        </Pressable>
        <Pressable
          style={[styles.contactosWrapper, styles.tabsFlexBox]}
          onPress={() => navigation.navigate("BsquedaDiarios")}
        >
          <Text style={[styles.contactos, styles.retosTypo]}>Diarios</Text>
        </Pressable>
        <Pressable
          style={[styles.contactosWrapper, styles.tabsFlexBox]}
          onPress={() => navigation.navigate("BsquedaHashtags")}
        >
          <Text style={[styles.contactos, styles.retosTypo]}>Hashtags</Text>
        </Pressable>
        <Pressable
          style={[styles.contactosWrapper, styles.tabsFlexBox]}
          onPress={() => navigation.navigate("BsquedaEventos")}
        >
          <Text style={[styles.contactos, styles.retosTypo]}>Eventos</Text>
        </Pressable>
      </View>
      <View style={[styles.notificationParent, styles.image6IconPosition]}>
        <LinearGradient
          style={styles.notification}
          locations={[0, 1]}
          colors={["#dee274", "#7ec18c"]}
        >
          <Pressable
            style={[styles.pressable, styles.pressableBg]}
            onPress={() => navigation.navigate("BusquedaRetoSemanal")}
          >
            <View style={styles.notificationInner}>
              <View style={styles.frameParent}>
                <View style={styles.retoSemanal08112023Wrapper}>
                  <Text style={[styles.retoSemanal, styles.retoSemanalClr]}>
                    Reto semanal - 08-11-2023
                  </Text>
                </View>
                <Text style={[styles.descubreCulEs, styles.retoSemanalClr]}>
                  Descubre cuál es el nuevo reto de esta semana
                </Text>
              </View>
            </View>
          </Pressable>
        </LinearGradient>
        <LinearGradient
          style={[styles.notification1, styles.pressableBg]}
          locations={[0, 1]}
          colors={["#dee274", "#7ec18c"]}
        >
          <View style={styles.notificationInner}>
            <View style={styles.frameParent}>
              <View style={styles.retoSemanal08112023Wrapper}>
                <Text style={[styles.retoSemanal, styles.retoSemanalClr]}>
                  Historia de relevo - 06-11-2023
                </Text>
              </View>
              <Text style={[styles.descubreCulEs, styles.retoSemanalClr]}>
                Más información del reto
              </Text>
            </View>
          </View>
        </LinearGradient>
        <LinearGradient
          style={[styles.notification1, styles.pressableBg]}
          locations={[0, 1]}
          colors={["#dee274", "#7ec18c"]}
        >
          <View style={styles.notificationInner}>
            <View style={styles.frameParent}>
              <View style={styles.retoSemanal08112023Wrapper}>
                <Text style={[styles.retoSemanal, styles.retoSemanalClr]}>
                  Dibujo en cadena - 01-11-2023
                </Text>
              </View>
              <Text style={[styles.descubreCulEs, styles.retoSemanalClr]}>
                Más información del reto
              </Text>
            </View>
          </View>
        </LinearGradient>
        <LinearGradient
          style={[styles.notification1, styles.pressableBg]}
          locations={[0, 1]}
          colors={["#dee274", "#7ec18c"]}
        >
          <View style={styles.notificationInner}>
            <View style={styles.frameParent}>
              <View style={styles.retoSemanal08112023Wrapper}>
                <Text style={[styles.retoSemanal, styles.retoSemanalClr]}>
                  Dibujo en cadena - 01-11-2023
                </Text>
              </View>
              <Text style={[styles.descubreCulEs, styles.retoSemanalClr]}>
                Más información del reto
              </Text>
            </View>
          </View>
        </LinearGradient>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tabsParentPosition: {
    width: 428,
    left: 0,
    position: "absolute",
  },
  image6IconPosition: {
    left: 20,
    position: "absolute",
  },
  bsqueda1Typo: {
    textAlign: "left",
    fontWeight: "700",
  },
  tabsFlexBox: {
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_9xs,
    borderRadius: Border.br_7xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  retosTypo: {
    textAlign: "center",
    lineHeight: 19,
    fontSize: FontSize.size_base,
    letterSpacing: 0,
    fontFamily: FontFamily.lato,
  },
  pressableBg: {
    backgroundColor: Color.linearBoton,
    padding: Padding.p_xl,
    borderRadius: Border.br_3xs,
    flexDirection: "row",
  },
  retoSemanalClr: {
    color: Color.white,
    letterSpacing: 0,
    fontFamily: FontFamily.lato,
  },
  navigationIcon: {
    top: 821,
    height: 105,
  },
  bsquedaChild: {
    top: 0,
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowRadius: 25,
    elevation: 25,
    shadowOpacity: 1,
    height: 228,
    backgroundColor: Color.white,
  },
  image6Icon: {
    top: 3,
    width: 87,
    height: 55,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  back: {
    width: 24,
    height: 24,
  },
  bsqueda1: {
    fontSize: FontSize.size_5xl,
    color: Color.negro,
    marginLeft: 20,
    fontFamily: FontFamily.lato,
    textAlign: "left",
  },
  backParent: {
    top: 78,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    left: 20,
    position: "absolute",
  },
  iconlylightOutlinesearch: {
    width: 20,
    height: 20,
  },
  search: {
    fontSize: FontSize.size_sm,
    lineHeight: 21,
    fontStyle: "italic",
    fontWeight: "200",
    fontFamily: FontFamily.nunito,
    color: Color.textPlaceholder,
    letterSpacing: 0,
    textAlign: "left",
  },
  placeholderInput: {
    marginLeft: 6,
    flexDirection: "row",
    flex: 1,
  },
  searchBar: {
    backgroundColor: Color.fAFAFA,
    paddingHorizontal: Padding.p_sm,
    paddingVertical: Padding.p_5xs,
    borderRadius: Border.br_3xs,
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  iconlylightsendCopyWrapper: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.backgroundGreyBackground,
    padding: Padding.p_7xs,
    marginLeft: 16,
    flexDirection: "row",
  },
  header: {
    marginLeft: -214,
    top: 119,
    left: "50%",
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_xs,
    alignItems: "center",
    flexDirection: "row",
    width: 428,
    position: "absolute",
    backgroundColor: Color.white,
  },
  retos: {
    color: Color.primario1,
    fontWeight: "700",
    textAlign: "center",
  },
  tabs: {
    backgroundColor: Color.secundario,
    width: 114,
  },
  contactos: {
    color: Color.grisGeneral,
  },
  contactosWrapper: {
    width: 123,
    overflow: "hidden",
  },
  tabsParent: {
    top: 184,
    flexDirection: "row",
  },
  retoSemanal: {
    fontSize: FontSize.size_lg,
    lineHeight: 22,
    alignSelf: "stretch",
    textAlign: "left",
    fontWeight: "700",
  },
  retoSemanal08112023Wrapper: {
    alignSelf: "stretch",
  },
  descubreCulEs: {
    fontWeight: "300",
    textAlign: "justify",
    width: 348,
    marginTop: 10,
    lineHeight: 19,
    fontSize: FontSize.size_base,
    color: Color.white,
  },
  frameParent: {
    flex: 1,
  },
  notificationInner: {
    flexDirection: "row",
    flex: 1,
  },
  pressable: {
    width: "100%",
  },
  notification: {
    width: 388,
  },
  notification1: {
    marginTop: 20,
    width: 388,
  },
  notificationParent: {
    top: 258,
  },
  bsqueda: {
    borderRadius: Border.br_31xl,
    height: 926,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.white,
  },
});

export default Bsqueda1;
