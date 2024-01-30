import React, { useState, useCallback } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable, Modal } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import Fecha5 from "../components/Fecha5";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const MIDIARIOENTRADATEXTOPL6 = () => {
  const [frameContainer25Visible, setFrameContainer25Visible] = useState(false);
  const navigation = useNavigation();

  const openFrameContainer25 = useCallback(() => {
    setFrameContainer25Visible(true);
  }, []);

  const closeFrameContainer25 = useCallback(() => {
    setFrameContainer25Visible(false);
  }, []);

  return (
    <>
      <View style={[styles.miDiarioEntradaTextoPl, styles.iconLayout]}>
        <View style={styles.frameParent}>
          <Pressable
            style={styles.frameLayout}
            onPress={() => navigation.navigate("MIDIARIOENTRADATEXTO")}
          >
            <View style={[styles.frameContainer, styles.frameContainerFlexBox]}>
              <View style={styles.aatarWrapper}>
                <Image
                  style={styles.aatarIcon}
                  contentFit="cover"
                  source={require("../assets/aatar7.png")}
                />
              </View>
              <View style={styles.parent}>
                <Text style={styles.text}>07</Text>
                <Text style={styles.jul2023}>jul. 2023</Text>
              </View>
            </View>
            <Text style={[styles.hoyHemosVisitado, styles.urielYYo2Typo]}>
              Hoy hemos visitado en Tokio un restaurante que nos ha encantado...
            </Text>
          </Pressable>
          <View style={[styles.frameView, styles.frameLayout]}>
            <View style={[styles.frameContainer, styles.frameContainerFlexBox]}>
              <View style={styles.aatarWrapper}>
                <Image
                  style={styles.aatarIcon}
                  contentFit="cover"
                  source={require("../assets/aatar7.png")}
                />
              </View>
              <View style={styles.parent}>
                <Text style={styles.text}>07</Text>
                <Text style={styles.jul2023}>jul. 2023</Text>
              </View>
            </View>
            <Text style={[styles.hoyHemosVisitado, styles.urielYYo2Typo]}>
              Uriel y yo estamos muy contentos de empezar nuestro viaje a
              Japón...
            </Text>
          </View>
          <View style={[styles.frameView, styles.frameLayout]}>
            <View style={[styles.frameContainer, styles.frameContainerFlexBox]}>
              <View style={styles.aatarWrapper}>
                <Image
                  style={styles.aatarIcon}
                  contentFit="cover"
                  source={require("../assets/aatar7.png")}
                />
              </View>
              <View style={styles.parent}>
                <Text style={styles.text}>07</Text>
                <Text style={styles.jul2023}>jul. 2023</Text>
              </View>
            </View>
            <Text style={[styles.hoyHemosVisitado, styles.urielYYo2Typo]}>
              Uriel y yo estamos muy contentos de empezar nuestro viaje a
              Japón...
            </Text>
          </View>
          <View style={[styles.frameView, styles.frameLayout]}>
            <View style={[styles.frameContainer, styles.frameContainerFlexBox]}>
              <View style={styles.aatarWrapper}>
                <Image
                  style={styles.aatarIcon}
                  contentFit="cover"
                  source={require("../assets/aatar7.png")}
                />
              </View>
              <View style={styles.parent}>
                <Text style={styles.text}>07</Text>
                <Text style={styles.jul2023}>jul. 2023</Text>
              </View>
            </View>
            <Text style={[styles.hoyHemosVisitado, styles.urielYYo2Typo]}>
              Hoy hemos visitado en Tokio un restaurante que nos ha encantado...
            </Text>
          </View>
          <View style={[styles.frameView, styles.frameLayout]}>
            <View style={[styles.frameContainer, styles.frameContainerFlexBox]}>
              <View style={styles.aatarWrapper}>
                <Image
                  style={styles.aatarIcon}
                  contentFit="cover"
                  source={require("../assets/aatar7.png")}
                />
              </View>
              <View style={styles.parent}>
                <Text style={styles.text}>07</Text>
                <Text style={styles.jul2023}>jul. 2023</Text>
              </View>
            </View>
            <Text style={[styles.urielYYo2, styles.urielYYo2Typo]}>
              Uriel y yo estamos muy contentos de empezar nuestro viaje a
              Japón...
            </Text>
          </View>
          <View style={styles.frameParent8}>
            <View style={styles.frameParent9}>
              <View style={styles.aatarWrapper}>
                <Image
                  style={styles.aatarIcon}
                  contentFit="cover"
                  source={require("../assets/aatar7.png")}
                />
              </View>
              <View style={styles.parent}>
                <Text style={styles.text}>07</Text>
                <Text style={styles.jul2023}>jul. 2023</Text>
              </View>
            </View>
            <Text style={[styles.urielYYo2, styles.urielYYo2Typo]}>
              Uriel y yo estamos muy contentos de empezar nuestro viaje a
              Japón...
            </Text>
          </View>
          <View style={styles.frameParent8}>
            <View style={styles.frameParent9}>
              <View style={styles.aatarWrapper}>
                <Image
                  style={styles.aatarIcon}
                  contentFit="cover"
                  source={require("../assets/aatar7.png")}
                />
              </View>
              <Pressable style={styles.parent} onPress={openFrameContainer25}>
                <Text style={styles.text}>07</Text>
                <Text style={styles.jul2023}>jul. 2023</Text>
              </Pressable>
            </View>
            <Text style={[styles.urielYYo2, styles.urielYYo2Typo]}>
              Hoy hemos visitado en Tokio un restaurante que nos ha encantado...
            </Text>
          </View>
        </View>
        <View
          style={[styles.miDiarioEntradaTextoPlChild, styles.diarioLayout]}
        />
        <Image
          style={styles.image6Icon}
          contentFit="cover"
          source={require("../assets/image-6.png")}
        />
        <View style={styles.iconlylightOutlinesearchParent}>
          <Image
            style={styles.iconlylightOutlinesearch}
            contentFit="cover"
            source={require("../assets/iconlylightoutlinesearch5.png")}
          />
          <Image
            style={[styles.documentIcon, styles.documentIconLayout]}
            contentFit="cover"
            source={require("../assets/document3.png")}
          />
          <Image
            style={styles.documentIconLayout}
            contentFit="cover"
            source={require("../assets/iconlylightoutlinesetting1.png")}
          />
        </View>
        <Image
          style={[styles.navigationIcon, styles.diarioLayout]}
          contentFit="cover"
          source={require("../assets/navigation25.png")}
        />
        <LinearGradient
          style={[styles.miDiarioEntradaTextoPlItem, styles.diarioLayout]}
          locations={[0, 1]}
          colors={["#b7e4c0", "rgba(245, 245, 247, 0)"]}
        />
        <Image
          style={styles.iconlyboldfilter2}
          contentFit="cover"
          source={require("../assets/iconlyboldfilter21.png")}
        />
        <View style={styles.backParent}>
          <Pressable
            style={styles.back}
            onPress={() => navigation.navigate("MIDIARIOPANTALLAPERSONAL")}
          >
            <Image
              style={[styles.icon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/back8.png")}
            />
          </Pressable>
          <Text style={styles.ltimasEntradas}>Últimas entradas</Text>
        </View>
        <View style={styles.stories}>
          <View style={styles.faritaLayout}>
            <Image
              style={[styles.aatarIcon7, styles.aatarIcon7Position]}
              contentFit="cover"
              source={require("../assets/aatar4.png")}
            />
            <View style={[styles.benjaminWrapper, styles.aatarIcon7Position]}>
              <Text style={[styles.benjamin1, styles.marie1Typo]}>
                Benjamin
              </Text>
            </View>
          </View>
          <View style={[styles.farita, styles.faritaLayout]}>
            <Image
              style={[styles.aatarIcon7, styles.aatarIcon7Position]}
              contentFit="cover"
              source={require("../assets/aatar5.png")}
            />
            <View style={[styles.benjaminWrapper, styles.aatarIcon7Position]}>
              <Text style={[styles.farita1, styles.marie1Typo]}>Farita</Text>
            </View>
          </View>
          <View style={[styles.farita, styles.faritaLayout]}>
            <Image
              style={[styles.aatarIcon7, styles.aatarIcon7Position]}
              contentFit="cover"
              source={require("../assets/aatar5.png")}
            />
            <View style={[styles.benjaminWrapper, styles.aatarIcon7Position]}>
              <Text style={[styles.marie1, styles.marie1Typo]}>Marie</Text>
            </View>
          </View>
          <View style={[styles.farita, styles.faritaLayout]}>
            <Image
              style={[styles.aatarIcon7, styles.aatarIcon7Position]}
              contentFit="cover"
              source={require("../assets/aatar4.png")}
            />
            <View style={[styles.benjaminWrapper, styles.aatarIcon7Position]}>
              <Text style={[styles.benjamin1, styles.marie1Typo]}>
                Benjamin
              </Text>
            </View>
          </View>
          <View style={[styles.farita, styles.faritaLayout]}>
            <Image
              style={[styles.aatarIcon7, styles.aatarIcon7Position]}
              contentFit="cover"
              source={require("../assets/aatar5.png")}
            />
            <View style={[styles.benjaminWrapper, styles.aatarIcon7Position]}>
              <Text style={[styles.farita1, styles.marie1Typo]}>Farita</Text>
            </View>
          </View>
          <View style={[styles.farita, styles.faritaLayout]}>
            <Image
              style={[styles.aatarIcon7, styles.aatarIcon7Position]}
              contentFit="cover"
              source={require("../assets/aatar5.png")}
            />
            <View style={[styles.benjaminWrapper, styles.aatarIcon7Position]}>
              <Text style={[styles.farita1, styles.marie1Typo]}>Claire</Text>
            </View>
          </View>
        </View>
      </View>

      <Modal animationType="fade" transparent visible={frameContainer25Visible}>
        <View style={styles.frameContainer25Overlay}>
          <Pressable
            style={styles.frameContainer25Bg}
            onPress={closeFrameContainer25}
          />
          <Fecha5 onClose={closeFrameContainer25} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  frameContainerFlexBox: {
    alignSelf: "stretch",
    flex: 1,
  },
  urielYYo2Typo: {
    display: "flex",
    lineHeight: 27,
    fontSize: FontSize.size_lg,
    marginTop: 20,
    textAlign: "left",
    color: Color.negro,
    fontFamily: FontFamily.lato,
    letterSpacing: 0,
    alignItems: "center",
  },
  frameLayout: {
    height: 110,
    alignSelf: "stretch",
  },
  diarioLayout: {
    width: 428,
    position: "absolute",
  },
  documentIconLayout: {
    marginLeft: 30,
    height: 24,
    width: 24,
  },
  aatarIcon7Position: {
    width: 70,
    left: 0,
    position: "absolute",
  },
  marie1Typo: {
    fontWeight: "600",
    lineHeight: 22,
    fontSize: FontSize.footnote_size,
    top: -1,
    textAlign: "center",
    color: Color.negro,
    fontFamily: FontFamily.lato,
    letterSpacing: 0,
    position: "absolute",
  },
  faritaLayout: {
    height: 90,
    width: 70,
  },
  aatarIcon: {
    width: 36,
    height: 36,
  },
  aatarWrapper: {
    alignItems: "center",
  },
  text: {
    fontSize: FontSize.size_5xl,
    lineHeight: 36,
    textAlign: "center",
    color: Color.negro,
    fontFamily: FontFamily.lato,
    fontWeight: "700",
    letterSpacing: 0,
  },
  jul2023: {
    lineHeight: 30,
    marginLeft: 10,
    fontSize: FontSize.size_xl,
    textAlign: "center",
    color: Color.negro,
    fontFamily: FontFamily.lato,
    letterSpacing: 0,
  },
  parent: {
    marginLeft: 8,
    alignItems: "center",
    flexDirection: "row",
  },
  frameContainer: {
    flexDirection: "row",
  },
  hoyHemosVisitado: {
    marginTop: 20,
    alignSelf: "stretch",
    flex: 1,
  },
  frameView: {
    marginTop: 20,
  },
  urielYYo2: {
    marginTop: 20,
    width: 388,
  },
  frameParent9: {
    flexDirection: "row",
  },
  frameParent8: {
    marginTop: 20,
    width: 388,
  },
  frameContainer25Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  frameContainer25Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  frameParent: {
    top: 258,
    height: 523,
    width: 388,
    left: 20,
    position: "absolute",
  },
  miDiarioEntradaTextoPlChild: {
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowRadius: 25,
    elevation: 25,
    shadowOpacity: 1,
    height: 238,
    left: 0,
    width: 428,
    top: 0,
    backgroundColor: Color.white,
  },
  image6Icon: {
    top: 3,
    width: 87,
    height: 55,
    left: 20,
    position: "absolute",
  },
  iconlylightOutlinesearch: {
    height: 24,
    width: 24,
  },
  documentIcon: {
    overflow: "hidden",
  },
  iconlylightOutlinesearchParent: {
    top: 20,
    left: 276,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  navigationIcon: {
    marginLeft: -214,
    top: 821,
    left: "50%",
    height: 105,
  },
  miDiarioEntradaTextoPlItem: {
    top: 64,
    height: 174,
    backgroundColor: Color.linearBoton,
    left: 0,
    width: 428,
  },
  iconlyboldfilter2: {
    height: "2.59%",
    width: "5.61%",
    top: "9.07%",
    right: "4.67%",
    bottom: "88.34%",
    left: "89.72%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  back: {
    width: 22,
    height: 22,
  },
  ltimasEntradas: {
    color: Color.primario2,
    marginLeft: 20,
    textAlign: "left",
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.lato,
    fontWeight: "700",
  },
  backParent: {
    top: 84,
    alignItems: "center",
    flexDirection: "row",
    left: 20,
    position: "absolute",
  },
  aatarIcon7: {
    height: 70,
    top: 0,
  },
  benjamin1: {
    left: 10,
  },
  benjaminWrapper: {
    top: 70,
    height: 20,
    overflow: "hidden",
  },
  farita1: {
    left: 20,
  },
  farita: {
    marginLeft: 20,
  },
  marie1: {
    left: 19,
  },
  stories: {
    top: 128,
    width: 408,
    flexDirection: "row",
    left: 20,
    position: "absolute",
  },
  miDiarioEntradaTextoPl: {
    borderRadius: Border.br_31xl,
    height: 926,
    overflow: "hidden",
    flex: 1,
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default MIDIARIOENTRADATEXTOPL6;
