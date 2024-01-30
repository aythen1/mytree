import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Padding, Border, Color } from "../GlobalStyles";

const BsquedaEventos = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.bsquedaEventos, styles.iconLayout]}>
      <Image
        style={[styles.navigationIcon, styles.headerLayout]}
        contentFit="cover"
        source={require("../assets/navigation10.png")}
      />
      <View style={[styles.bsquedaEventosChild, styles.headerLayout]} />
      <Image
        style={styles.image6Icon}
        contentFit="cover"
        source={require("../assets/image-6.png")}
      />
      <View style={styles.backParent}>
        <Pressable
          style={styles.back}
          onPress={() => navigation.navigate("MUROINFORMACIN")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/back.png")}
          />
        </Pressable>
        <Text style={styles.bsqueda}>Búsqueda</Text>
      </View>
      <View style={[styles.header, styles.headerLayout]}>
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
      <View style={[styles.tabsParent, styles.headerLayout]}>
        <Pressable
          style={styles.tabs}
          onPress={() => navigation.navigate("Bsqueda1")}
        >
          <Text style={[styles.retos, styles.retosTypo]}>Retos</Text>
        </Pressable>
        <Pressable
          style={[styles.contactosWrapper, styles.wrapperFlexBox]}
          onPress={() => navigation.navigate("BsquedaContactos")}
        >
          <Text style={[styles.retos, styles.retosTypo]}>Contactos</Text>
        </Pressable>
        <Pressable
          style={[styles.contactosWrapper, styles.wrapperFlexBox]}
          onPress={() => navigation.navigate("BsquedaPublicaciones")}
        >
          <Text style={[styles.retos, styles.retosTypo]}>Publicaciones</Text>
        </Pressable>
        <Pressable
          style={[styles.contactosWrapper, styles.wrapperFlexBox]}
          onPress={() => navigation.navigate("BsquedaDiarios")}
        >
          <Text style={[styles.retos, styles.retosTypo]}>Diarios</Text>
        </Pressable>
        <Pressable
          style={styles.wrapperFlexBox}
          onPress={() => navigation.navigate("BsquedaHashtags")}
        >
          <Text style={[styles.retos, styles.retosTypo]}>Hashtags</Text>
        </Pressable>
        <View style={[styles.eventosWrapper, styles.wrapperFlexBox]}>
          <Text style={[styles.eventos, styles.retosTypo]}>Eventos</Text>
        </View>
      </View>
      <View style={styles.vectorParent}>
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector19.png")}
        />
        <Text style={[styles.tuAgendaPersonal, styles.retosTypo]}>
          Tu agenda personal te espera. Visualiza los eventos y vive cada
          momento al máximo
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  headerLayout: {
    width: 428,
    position: "absolute",
  },
  retosTypo: {
    textAlign: "center",
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.lato,
  },
  wrapperFlexBox: {
    width: 123,
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_9xs,
    borderRadius: Border.br_7xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  navigationIcon: {
    top: 821,
    height: 105,
    left: 0,
    width: 428,
  },
  bsquedaEventosChild: {
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
    left: 0,
    width: 428,
    backgroundColor: Color.white,
  },
  image6Icon: {
    top: 3,
    width: 87,
    height: 55,
    left: 20,
    position: "absolute",
  },
  icon: {
    height: "100%",
  },
  back: {
    width: 24,
    height: 24,
  },
  bsqueda: {
    fontSize: FontSize.size_5xl,
    color: Color.negro,
    marginLeft: 20,
    textAlign: "left",
    fontFamily: FontFamily.lato,
    fontWeight: "700",
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
    borderRadius: Border.br_3xs,
    backgroundColor: Color.fAFAFA,
    paddingHorizontal: Padding.p_sm,
    paddingVertical: Padding.p_5xs,
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
    backgroundColor: Color.white,
  },
  retos: {
    color: Color.grisGeneral,
    lineHeight: 19,
    textAlign: "center",
    fontSize: FontSize.size_base,
    letterSpacing: 0,
  },
  tabs: {
    width: 114,
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_9xs,
    borderRadius: Border.br_7xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.white,
  },
  contactosWrapper: {
    backgroundColor: Color.white,
  },
  eventos: {
    color: Color.white,
    lineHeight: 19,
    textAlign: "center",
    fontSize: FontSize.size_base,
    letterSpacing: 0,
    fontWeight: "700",
  },
  eventosWrapper: {
    backgroundColor: Color.secundario,
  },
  tabsParent: {
    top: 184,
    flexDirection: "row",
    left: 0,
    width: 428,
  },
  vectorIcon: {
    width: 115,
    height: 118,
  },
  tuAgendaPersonal: {
    color: Color.colorDarkgray_100,
    width: 342,
    marginTop: 30,
    textAlign: "center",
    fontSize: FontSize.size_base,
  },
  vectorParent: {
    top: 317,
    left: 43,
    alignItems: "center",
    position: "absolute",
  },
  bsquedaEventos: {
    borderRadius: Border.br_31xl,
    height: 926,
    flex: 1,
    backgroundColor: Color.white,
  },
});

export default BsquedaEventos;
