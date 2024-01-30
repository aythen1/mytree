import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Padding, Border, FontSize, Color } from "../GlobalStyles";

const PERFILIDINFANTE = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.perfilIdInfante}>
      <View style={[styles.holaSoyLucasNacEl23DeParent, styles.parentPosition]}>
        <Text
          style={[styles.holaSoyLucas, styles.verMs1Typo]}
        >{`Hola, soy Lucas, nací el 23 de agosoto de 2023 de mi mamá Noelia y de mi papá Uriel.
Actualmente tengo 1 año y dos meses.`}</Text>
        <Pressable
          style={styles.verMs}
          onPress={() => navigation.navigate("BIO2Infante")}
        >
          <Text style={[styles.verMs1, styles.verMs1Typo]}>Ver más...</Text>
        </Pressable>
        <Text style={[styles.embarazo, styles.verMs1Typo]}>Embarazo</Text>
        <Image
          style={[styles.frameChild, styles.frameLayout]}
          contentFit="cover"
          source={require("../assets/line-78.png")}
        />
        <View style={styles.faritaParent}>
          <Image
            style={[styles.faritaIcon, styles.iconLayout]}
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
            style={styles.vectorIcon}
            contentFit="cover"
            source={require("../assets/vector22.png")}
          />
        </View>
        <Text style={[styles.embarazo, styles.verMs1Typo]}>
          Recién nacido y mis primeras semanas
        </Text>
        <Image
          style={[styles.frameChild, styles.frameLayout]}
          contentFit="cover"
          source={require("../assets/line-78.png")}
        />
        <View style={styles.faritaGroup}>
          <Image
            style={[styles.faritaIcon, styles.iconLayout]}
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
            style={styles.vectorIcon}
            contentFit="cover"
            source={require("../assets/vector22.png")}
          />
        </View>
        <Text style={[styles.embarazo, styles.verMs1Typo]}>
          Sonrisas Inolvidables
        </Text>
        <Image
          style={[styles.frameInner, styles.frameLayout]}
          contentFit="cover"
          source={require("../assets/line-79.png")}
        />
        <View style={styles.faritaParent}>
          <Image
            style={[styles.faritaIcon, styles.iconLayout]}
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
            style={styles.vectorIcon}
            contentFit="cover"
            source={require("../assets/vector22.png")}
          />
        </View>
        <Text
          style={[styles.embarazo, styles.verMs1Typo]}
        >{`Momentos con mamá y papá `}</Text>
        <Image
          style={[styles.frameInner, styles.frameLayout]}
          contentFit="cover"
          source={require("../assets/line-79.png")}
        />
        <View style={styles.faritaParent}>
          <Image
            style={[styles.faritaIcon, styles.iconLayout]}
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
            style={styles.vectorIcon}
            contentFit="cover"
            source={require("../assets/vector22.png")}
          />
        </View>
        <Image
          style={styles.frameIcon}
          contentFit="cover"
          source={require("../assets/frame-1547755131.png")}
        />
      </View>
      <View style={[styles.rectangleParent, styles.textPosition]}>
        <View style={styles.rectangleView} />
        <Image
          style={styles.image6Icon}
          contentFit="cover"
          source={require("../assets/image-6.png")}
        />
        <View style={styles.vectorParent}>
          <Image
            style={styles.iconlyLayout}
            contentFit="cover"
            source={require("../assets/vector7.png")}
          />
          <View style={[styles.iconly, styles.iconlyLayout]}>
            <Image
              style={styles.notificationIcon}
              contentFit="cover"
              source={require("../assets/notification4.png")}
            />
            <View style={styles.ellipseParent}>
              <Image
                style={styles.groupChild}
                contentFit="cover"
                source={require("../assets/ellipse-2263.png")}
              />
              <Text style={[styles.text, styles.textPosition]}>1</Text>
            </View>
          </View>
          <Pressable
            style={[styles.iconly, styles.iconlyLayout]}
            onPress={() => navigation.navigate("PERFILINFANTEAJUSTES")}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/iconlylightoutlinesetting.png")}
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
            onPress={() => navigation.navigate("BIO2Infante")}
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
  verMs1Typo: {
    textAlign: "left",
    fontFamily: FontFamily.lato,
  },
  frameLayout: {
    width: 388,
    marginTop: 20,
  },
  iconLayout: {
    width: 70,
    height: 70,
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
  holaSoyLucas: {
    color: Color.negro,
    display: "flex",
    alignItems: "center",
    lineHeight: 27,
    letterSpacing: 0,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.lato,
    width: 391,
  },
  verMs1: {
    color: Color.primario2,
    fontWeight: "700",
    lineHeight: 27,
    letterSpacing: 0,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.lato,
  },
  verMs: {
    marginTop: 20,
  },
  embarazo: {
    fontSize: FontSize.size_xl,
    lineHeight: 24,
    fontWeight: "500",
    marginTop: 20,
  },
  frameChild: {
    maxHeight: "100%",
  },
  faritaIcon: {
    height: 70,
  },
  marieIcon: {
    marginLeft: 20,
    height: 70,
  },
  vectorIcon: {
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
  frameIcon: {
    height: 70,
    marginTop: 20,
    width: 391,
  },
  holaSoyLucasNacEl23DeParent: {
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
  vectorParent: {
    top: 20,
    left: 296,
    zIndex: 2,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  ionmenuIcon: {
    top: 86,
    width: 26,
    height: 20,
    zIndex: 3,
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
    height: 60,
    left: "50%",
    zIndex: 1,
    position: "absolute",
  },
  maskGroupParent: {
    top: 146,
    zIndex: 4,
    left: 20,
    position: "absolute",
  },
  miBiografa: {
    color: Color.white,
    fontWeight: "700",
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
  perfilIdInfante: {
    borderRadius: Border.br_31xl,
    flex: 1,
    height: 926,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default PERFILIDINFANTE;
