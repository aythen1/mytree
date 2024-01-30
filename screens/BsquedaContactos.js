import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Padding, Border, Color } from "../GlobalStyles";

const BsquedaContactos = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.bsquedaContactos, styles.iconLayout]}>
      <Image
        style={[styles.navigationIcon, styles.headerLayout]}
        contentFit="cover"
        source={require("../assets/navigation17.png")}
      />
      <View style={[styles.bsquedaContactosChild, styles.headerLayout]} />
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
        <Text style={[styles.bsqueda, styles.bsquedaTypo]}>Búsqueda</Text>
      </View>
      <View style={[styles.header, styles.headerLayout]}>
        <View style={styles.searchBar}>
          <Image
            style={styles.iconlylightOutlinesearch}
            contentFit="cover"
            source={require("../assets/iconlylightoutlinesearch4.png")}
          />
          <View style={styles.placeholderInput}>
            <Text
              style={[styles.search, styles.searchFlexBox]}
            >{`Search `}</Text>
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
        <View style={[styles.contactosWrapper, styles.wrapperFlexBox]}>
          <Text style={[styles.contactos, styles.retosTypo]}>Contactos</Text>
        </View>
        <Pressable
          style={styles.wrapperFlexBox}
          onPress={() => navigation.navigate("BsquedaPublicaciones")}
        >
          <Text style={[styles.retos, styles.retosTypo]}>Publicaciones</Text>
        </Pressable>
        <Pressable
          style={styles.wrapperFlexBox}
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
        <Pressable
          style={styles.wrapperFlexBox}
          onPress={() => navigation.navigate("BsquedaEventos")}
        >
          <Text style={[styles.retos, styles.retosTypo]}>Eventos</Text>
        </Pressable>
      </View>
      <Text style={[styles.nuevoRetoFamiliar, styles.searchFlexBox]}>
        Nuevo Reto Familiar - 08-11-2023
      </Text>
      <View style={styles.frameParent}>
        <View>
          <View>
            <View>
              <Text style={[styles.familiares, styles.retosLayout]}>
                Familiares
              </Text>
              <View style={[styles.frameChild, styles.frameChildLayout]} />
            </View>
            <View style={styles.frameView}>
              <View style={styles.frameParent1}>
                <Image
                  style={styles.frameItem}
                  contentFit="cover"
                  source={require("../assets/frame-1547754875.png")}
                />
                <Text style={[styles.brunoPham, styles.retosLayout]}>
                  Bruno Pham
                </Text>
              </View>
              <View style={styles.frameParent2}>
                <Image
                  style={styles.frameItem}
                  contentFit="cover"
                  source={require("../assets/frame-1547754875.png")}
                />
                <Text style={[styles.brunoPham, styles.retosLayout]}>
                  Bruno Pham
                </Text>
              </View>
              <View style={styles.frameParent2}>
                <Image
                  style={styles.frameItem}
                  contentFit="cover"
                  source={require("../assets/frame-1547754875.png")}
                />
                <Text style={[styles.brunoPham, styles.retosLayout]}>
                  Bruno Pham
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.frameParent4}>
            <View>
              <Text style={[styles.familiares, styles.retosLayout]}>
                Amigos
              </Text>
              <View style={[styles.frameChild, styles.frameChildLayout]} />
            </View>
            <View style={styles.frameView}>
              <View style={styles.frameParent1}>
                <Image
                  style={styles.frameItem}
                  contentFit="cover"
                  source={require("../assets/frame-1547754875.png")}
                />
                <Text style={[styles.brunoPham, styles.retosLayout]}>
                  Bruno Pham
                </Text>
              </View>
              <View style={styles.frameParent2}>
                <Image
                  style={styles.frameItem}
                  contentFit="cover"
                  source={require("../assets/frame-1547754875.png")}
                />
                <Text style={[styles.brunoPham, styles.retosLayout]}>
                  Bruno Pham
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.frameChild3, styles.frameChildLayout]} />
        <View style={styles.userParent}>
          <Image
            style={styles.userIcon}
            contentFit="cover"
            source={require("../assets/3-user1.png")}
          />
          <Text
            style={[styles.invitaATu, styles.retosTypo]}
          >{`Invita a tu familia y tu familia elegida, y mantén
una conexión duradera`}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  headerLayout: {
    width: 428,
    position: "absolute",
  },
  bsquedaTypo: {
    fontFamily: FontFamily.lato,
    fontWeight: "700",
  },
  searchFlexBox: {
    letterSpacing: 0,
    textAlign: "left",
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
  retosLayout: {
    lineHeight: 19,
    letterSpacing: 0,
  },
  frameChildLayout: {
    height: 1,
    width: 389,
    borderTopWidth: 1,
    borderColor: Color.secundario,
    borderStyle: "solid",
  },
  navigationIcon: {
    top: 821,
    height: 105,
    left: 0,
    width: 428,
  },
  bsquedaContactosChild: {
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
    overflow: "hidden",
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
  contactos: {
    color: Color.primario1,
    lineHeight: 19,
    letterSpacing: 0,
    fontWeight: "700",
  },
  contactosWrapper: {
    backgroundColor: Color.secundario,
  },
  tabsParent: {
    top: 184,
    flexDirection: "row",
    left: 0,
    width: 428,
  },
  nuevoRetoFamiliar: {
    top: 394,
    left: 508,
    fontSize: FontSize.size_lg,
    lineHeight: 22,
    color: Color.black1,
    width: 348,
    fontFamily: FontFamily.lato,
    fontWeight: "700",
    position: "absolute",
  },
  familiares: {
    fontWeight: "500",
    color: Color.colorGray_200,
    fontSize: FontSize.size_base,
    lineHeight: 19,
    fontFamily: FontFamily.lato,
    textAlign: "left",
  },
  frameChild: {
    marginTop: 15,
  },
  frameItem: {
    width: 30,
    height: 30,
  },
  brunoPham: {
    color: Color.grisDiscord,
    textAlign: "justify",
    marginLeft: 13,
    fontSize: FontSize.size_base,
    lineHeight: 19,
    fontFamily: FontFamily.lato,
    fontWeight: "700",
  },
  frameParent1: {
    alignItems: "center",
    flexDirection: "row",
  },
  frameParent2: {
    marginTop: 15,
    alignItems: "center",
    flexDirection: "row",
  },
  frameView: {
    marginTop: 15,
  },
  frameParent4: {
    marginTop: 30,
  },
  frameChild3: {
    marginTop: 30,
  },
  userIcon: {
    width: 82,
    height: 57,
    overflow: "hidden",
  },
  invitaATu: {
    color: Color.colorDarkgray_100,
    width: 342,
    marginTop: 30,
  },
  userParent: {
    marginTop: 30,
    alignItems: "center",
  },
  frameParent: {
    top: 258,
    left: 18,
    alignItems: "center",
    position: "absolute",
  },
  bsquedaContactos: {
    borderRadius: Border.br_31xl,
    height: 926,
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.white,
  },
});

export default BsquedaContactos;
