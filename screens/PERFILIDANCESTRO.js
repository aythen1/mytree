import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Padding, Border, FontSize, Color } from "../GlobalStyles";

const PERFILIDANCESTRO = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.perfilIdAncestro}>
      <View
        style={[styles.holaSoyFranciscoNacEnPParent, styles.parentPosition]}
      >
        <Text
          style={styles.holaSoyFrancisco}
        >{`Hola, soy Francisco, nací en Paterna del Río (Almería) el 21 de mayo de 1936.
Fallecí el pasado 1 de mayo de 2008 en Badalona.`}</Text>
        <Text style={[styles.personasVinculadasA, styles.miInfanciaTypo]}>
          Personas vinculadas a este ID
        </Text>
        <View style={[styles.farita, styles.faritaFlexBox]}>
          <Image
            style={styles.aatarIconLayout}
            contentFit="cover"
            source={require("../assets/aatar6.png")}
          />
          <Image
            style={[styles.aatarIcon1, styles.aatarIconLayout]}
            contentFit="cover"
            source={require("../assets/aatar6.png")}
          />
          <Image
            style={[styles.aatarIcon1, styles.aatarIconLayout]}
            contentFit="cover"
            source={require("../assets/aatar6.png")}
          />
          <Image
            style={styles.vectorIcon}
            contentFit="cover"
            source={require("../assets/vector21.png")}
          />
        </View>
        <Text style={[styles.miInfancia, styles.miInfanciaTypo]}>
          Mi infancia
        </Text>
        <Image
          style={[styles.frameChild, styles.frameLayout]}
          contentFit="cover"
          source={require("../assets/line-78.png")}
        />
        <View style={styles.faritaParent}>
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/farita1.png")}
          />
          <Image
            style={[styles.marieIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/farita1.png")}
          />
          <Image
            style={[styles.marieIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/farita2.png")}
          />
          <Image
            style={[styles.marieIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/farita2.png")}
          />
          <Image
            style={styles.vectorIcon1}
            contentFit="cover"
            source={require("../assets/vector22.png")}
          />
        </View>
        <Text style={[styles.miInfancia, styles.miInfanciaTypo]}>
          Mi matrimonio
        </Text>
        <Image
          style={[styles.frameChild, styles.frameLayout]}
          contentFit="cover"
          source={require("../assets/line-79.png")}
        />
        <View style={styles.faritaGroup}>
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/farita1.png")}
          />
          <Image
            style={[styles.marieIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/farita1.png")}
          />
          <Image
            style={[styles.marieIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/farita1.png")}
          />
          <Image
            style={[styles.marieIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/farita2.png")}
          />
          <Image
            style={[styles.marieIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/farita2.png")}
          />
          <Image
            style={styles.vectorIcon1}
            contentFit="cover"
            source={require("../assets/vector22.png")}
          />
        </View>
        <Text style={[styles.miInfancia, styles.miInfanciaTypo]}>
          Mi familia
        </Text>
        <Image
          style={[styles.frameInner, styles.frameLayout]}
          contentFit="cover"
          source={require("../assets/line-79.png")}
        />
        <View style={styles.faritaParent}>
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/farita1.png")}
          />
          <Image
            style={[styles.marieIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/farita1.png")}
          />
          <Image
            style={[styles.marieIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/farita2.png")}
          />
          <Image
            style={[styles.marieIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/farita2.png")}
          />
          <Image
            style={styles.vectorIcon1}
            contentFit="cover"
            source={require("../assets/vector22.png")}
          />
        </View>
        <View style={styles.frameView} />
      </View>
      <View style={[styles.rectangleParent, styles.textPosition]}>
        <View style={styles.rectangleView} />
        <Image
          style={styles.image6Icon}
          contentFit="cover"
          source={require("../assets/image-6.png")}
        />
        <View style={[styles.vectorParent, styles.faritaFlexBox]}>
          <Image
            style={styles.iconlyLayout}
            contentFit="cover"
            source={require("../assets/vector20.png")}
          />
          <View style={[styles.iconly, styles.iconlyLayout]}>
            <Image
              style={styles.notificationIcon}
              contentFit="cover"
              source={require("../assets/notification3.png")}
            />
            <View style={styles.ellipseParent}>
              <Image
                style={styles.groupChild}
                contentFit="cover"
                source={require("../assets/ellipse-2262.png")}
              />
              <Text style={[styles.text, styles.textPosition]}>1</Text>
            </View>
          </View>
          <Pressable
            style={[styles.iconly, styles.iconlyLayout]}
            onPress={() => navigation.navigate("PERFILANCESTROAJUSTES1")}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/iconlylightoutlinesetting3.png")}
            />
          </Pressable>
          <Pressable
            style={styles.iconlycurveddocument}
            onPress={() => navigation.navigate("PERFILANCESTROAJUSTES")}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/iconlycurveddocument.png")}
            />
          </Pressable>
        </View>
        <Image
          style={[styles.ionmenuIcon, styles.parentPosition]}
          contentFit="cover"
          source={require("../assets/ionmenu.png")}
        />
        <View style={[styles.maskGroupParent, styles.maskGroupLayout]}>
          <Image
            style={[styles.maskGroupIcon, styles.maskGroupLayout]}
            contentFit="cover"
            source={require("../assets/mask-group17.png")}
          />
          <Image
            style={styles.vectorIcon5}
            contentFit="cover"
            source={require("../assets/vector23.png")}
          />
        </View>
        <View style={[styles.tabsBar, styles.tabsBarPosition]}>
          <View style={[styles.miBiografaWrapper, styles.tabsFlexBox]}>
            <Text style={[styles.miBiografa, styles.miInfoTypo]}>
              Mi Biografía
            </Text>
          </View>
          <Pressable
            style={[styles.tabs, styles.tabsFlexBox]}
            onPress={() => navigation.navigate("BIO2Ancestro")}
          >
            <Text style={[styles.miInfo, styles.miInfoTypo]}>Mi info</Text>
          </Pressable>
          <View style={styles.tabsBarChild} />
        </View>
      </View>
      <Image
        style={[styles.navigationIcon, styles.tabsBarPosition]}
        contentFit="cover"
        source={require("../assets/navigation20.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  parentPosition: {
    left: 20,
    position: "absolute",
  },
  miInfanciaTypo: {
    fontWeight: "500",
    marginTop: 20,
    textAlign: "left",
    fontFamily: FontFamily.lato,
  },
  faritaFlexBox: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  aatarIconLayout: {
    height: 60,
    width: 60,
  },
  frameLayout: {
    width: 388,
    marginTop: 20,
  },
  iconLayout: {
    height: 70,
    width: 70,
  },
  textPosition: {
    top: 1,
    position: "absolute",
  },
  iconlyLayout: {
    height: 24,
    width: 24,
  },
  maskGroupLayout: {
    height: 233,
    width: 388,
  },
  tabsBarPosition: {
    marginLeft: -214,
    left: "50%",
    width: 428,
    position: "absolute",
  },
  tabsFlexBox: {
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_9xs,
    width: 214,
    borderRadius: Border.br_7xs,
    top: 0,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  miInfoTypo: {
    textAlign: "center",
    lineHeight: 19,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.lato,
    letterSpacing: 0,
  },
  holaSoyFrancisco: {
    lineHeight: 27,
    color: Color.negro,
    display: "flex",
    alignItems: "center",
    textAlign: "left",
    fontFamily: FontFamily.lato,
    letterSpacing: 0,
    fontSize: FontSize.size_lg,
    width: 391,
  },
  personasVinculadasA: {
    lineHeight: 22,
    marginTop: 20,
    fontSize: FontSize.size_lg,
    fontWeight: "500",
  },
  aatarIcon1: {
    marginLeft: 10,
  },
  vectorIcon: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },
  farita: {
    padding: 5,
    marginTop: 20,
  },
  miInfancia: {
    fontSize: FontSize.size_xl,
    lineHeight: 24,
    marginTop: 20,
  },
  frameChild: {
    maxHeight: "100%",
  },
  marieIcon: {
    marginLeft: 20,
  },
  vectorIcon1: {
    width: 30,
    height: 30,
    marginLeft: 20,
  },
  faritaParent: {
    flexDirection: "row",
    marginTop: 20,
    alignItems: "center",
    width: 391,
  },
  faritaGroup: {
    width: 406,
    flexDirection: "row",
    marginTop: 20,
    alignItems: "center",
  },
  frameInner: {
    height: 0,
  },
  frameView: {
    flexDirection: "row",
    marginTop: 20,
    alignItems: "center",
    width: 391,
    backgroundColor: Color.white,
  },
  holaSoyFranciscoNacEnPParent: {
    top: 480,
    height: 410,
    width: 391,
  },
  rectangleView: {
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowRadius: 25,
    elevation: 25,
    shadowOpacity: 1,
    height: 459,
    zIndex: 0,
    width: 428,
    backgroundColor: Color.white,
  },
  image6Icon: {
    top: 2,
    width: 87,
    height: 55,
    zIndex: 1,
    left: 20,
    position: "absolute",
  },
  notificationIcon: {
    height: "83.33%",
    width: "70.83%",
    top: "8.33%",
    right: "14.58%",
    bottom: "8.33%",
    left: "14.58%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupChild: {
    top: 0,
    height: 16,
    width: 16,
    left: 0,
    position: "absolute",
  },
  text: {
    left: 5,
    fontSize: FontSize.size_3xs,
    letterSpacing: 0.2,
    fontWeight: "800",
    fontFamily: FontFamily.nunitoSans,
    textAlign: "right",
    color: Color.white,
  },
  ellipseParent: {
    top: -6,
    left: 13,
    height: 16,
    width: 16,
    position: "absolute",
  },
  iconly: {
    marginLeft: 20,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  iconlycurveddocument: {
    width: 19,
    height: 22,
    marginLeft: 20,
  },
  vectorParent: {
    top: 20,
    left: 257,
    width: 151,
    zIndex: 2,
    position: "absolute",
  },
  ionmenuIcon: {
    top: 86,
    width: 26,
    zIndex: 3,
    height: 20,
    overflow: "hidden",
  },
  maskGroupIcon: {
    zIndex: 0,
  },
  vectorIcon5: {
    marginTop: -29.5,
    marginLeft: -37.5,
    top: "50%",
    width: 75,
    left: "50%",
    zIndex: 1,
    height: 60,
    position: "absolute",
  },
  maskGroupParent: {
    top: 146,
    zIndex: 4,
    left: 20,
    position: "absolute",
  },
  miBiografa: {
    fontWeight: "700",
    color: Color.white,
  },
  miBiografaWrapper: {
    backgroundColor: Color.secundario,
    left: 0,
    overflow: "hidden",
  },
  miInfo: {
    color: Color.gris,
  },
  tabs: {
    left: 214,
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
    top: 399,
    height: 40,
    zIndex: 5,
    backgroundColor: Color.white,
  },
  rectangleParent: {
    left: 0,
    flexDirection: "row",
  },
  navigationIcon: {
    top: 821,
    height: 105,
  },
  perfilIdAncestro: {
    borderRadius: Border.br_31xl,
    flex: 1,
    height: 926,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default PERFILIDANCESTRO;
