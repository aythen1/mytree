import React, { useState, useCallback } from "react";
import { StyleSheet, View, Text, Pressable, Modal } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import PopupDiario from "../components/PopupDiario";
import { Border, FontFamily, Color, FontSize } from "../GlobalStyles";

const MIDIARIOPANTALLAPERSONAL = () => {
  const navigation = useNavigation();
  const [
    iconlyLightOutlineInfoSquaVisible,
    setIconlyLightOutlineInfoSquaVisible,
  ] = useState(false);

  const openIconlyLightOutlineInfoSqua = useCallback(() => {
    setIconlyLightOutlineInfoSquaVisible(true);
  }, []);

  const closeIconlyLightOutlineInfoSqua = useCallback(() => {
    setIconlyLightOutlineInfoSquaVisible(false);
  }, []);

  return (
    <>
      <View style={styles.miDiarioPantallaPersonal}>
        <View style={styles.frameParent}>
          <View>
            <View style={[styles.frameChild, styles.frameChildLayout]} />
            <View style={styles.frameGroup}>
              <View>
                <View>
                  <Text style={[styles.enBlancoO, styles.textTypo]}>
                    En blanco o crea tu plantilla
                  </Text>
                </View>
              </View>
              <Image
                style={styles.cilpencilIcon}
                contentFit="cover"
                source={require("../assets/cilpencil.png")}
              />
              <Text style={[styles.text, styles.textTypo]}>{`  `}</Text>
            </View>
          </View>
          <View style={styles.rectangleGroup}>
            <View style={[styles.frameItem, styles.frameChildLayout]} />
            <View style={[styles.frameContainer, styles.frameParentPosition]}>
              <View>
                <View>
                  <Text style={[styles.enBlancoO, styles.textTypo]}>
                    Mi reflexión diaria
                  </Text>
                </View>
              </View>
              <Image
                style={styles.vectorIcon}
                contentFit="cover"
                source={require("../assets/vector34.png")}
              />
            </View>
          </View>
          <View style={styles.rectangleGroup}>
            <View style={[styles.frameInner, styles.frameChildLayout]} />
            <View style={[styles.frameParent1, styles.frameParentPosition]}>
              <View>
                <View>
                  <Text style={[styles.enBlancoO, styles.textTypo]}>
                    Celebrando Logros
                  </Text>
                </View>
              </View>
              <Image
                style={styles.vectorIcon1}
                contentFit="cover"
                source={require("../assets/vector35.png")}
              />
            </View>
          </View>
          <View style={styles.rectangleGroup}>
            <View style={[styles.rectangleView, styles.frameChildLayout]} />
            <View style={[styles.frameContainer, styles.frameParentPosition]}>
              <View>
                <View>
                  <Text style={[styles.enBlancoO, styles.textTypo]}>
                    Desafíos Superados
                  </Text>
                </View>
              </View>
              <Image
                style={styles.vectorIcon}
                contentFit="cover"
                source={require("../assets/vector36.png")}
              />
            </View>
          </View>
          <View style={styles.rectangleGroup}>
            <View style={[styles.frameChild1, styles.frameChildLayout]} />
            <View style={[styles.frameParent3, styles.frameParentPosition]}>
              <View>
                <View>
                  <Text style={[styles.enBlancoO, styles.textTypo]}>
                    Risas y Anécdotas
                  </Text>
                </View>
              </View>
              <Image
                style={styles.vectorIcon3}
                contentFit="cover"
                source={require("../assets/vector37.png")}
              />
            </View>
          </View>
          <Pressable
            style={styles.rectangleGroup}
            onPress={() => navigation.navigate("MIDIARIOENTRADATEXTOPL7")}
          >
            <View style={[styles.frameChild2, styles.frameChildLayout]} />
            <View style={[styles.frameParent3, styles.frameParentPosition]}>
              <View>
                <View>
                  <Text style={[styles.enBlancoO, styles.textTypo]}>
                    Descubriendo el mundo
                  </Text>
                </View>
              </View>
              <Image
                style={styles.vectorIcon4}
                contentFit="cover"
                source={require("../assets/vector38.png")}
              />
            </View>
          </Pressable>
        </View>
        <View style={styles.miDiarioPantallaPersonalChild} />
        <View
          style={[
            styles.miDiarioPantallaPersonalItem,
            styles.navigationIconPosition,
          ]}
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
        <View style={styles.ltimosDiariosFamiliaresPublParent}>
          <Text style={[styles.ltimosDiariosFamiliares, styles.textTypo]}>
            Últimos diarios familiares publicados
          </Text>
          <View style={styles.stories}>
            <View style={styles.faritaLayout}>
              <Pressable
                style={[styles.aatar, styles.aatarPosition]}
                onPress={() => navigation.navigate("MUROINFORMACIN1")}
              >
                <Image
                  style={styles.icon}
                  contentFit="cover"
                  source={require("../assets/aatar4.png")}
                />
              </Pressable>
              <View style={[styles.benjaminWrapper, styles.ionmenuIconLayout]}>
                <Text style={[styles.benjamin1, styles.text1Typo]}>
                  Benjamin
                </Text>
              </View>
            </View>
            <View style={[styles.farita, styles.faritaLayout]}>
              <Pressable
                style={[styles.aatar, styles.aatarPosition]}
                onPress={() => navigation.navigate("MUROINFORMACIN1")}
              >
                <Image
                  style={styles.icon}
                  contentFit="cover"
                  source={require("../assets/aatar5.png")}
                />
              </Pressable>
              <View style={[styles.benjaminWrapper, styles.ionmenuIconLayout]}>
                <Text style={[styles.farita1, styles.text1Typo]}>Farita</Text>
              </View>
            </View>
            <View style={[styles.farita, styles.faritaLayout]}>
              <Pressable
                style={[styles.aatar, styles.aatarPosition]}
                onPress={() => navigation.navigate("MUROINFORMACIN1")}
              >
                <Image
                  style={styles.icon}
                  contentFit="cover"
                  source={require("../assets/aatar5.png")}
                />
              </Pressable>
              <View style={[styles.benjaminWrapper, styles.ionmenuIconLayout]}>
                <Text style={[styles.marie1, styles.text1Typo]}>Marie</Text>
              </View>
            </View>
            <View style={[styles.farita, styles.faritaLayout]}>
              <Image
                style={[styles.aatar, styles.aatarPosition]}
                contentFit="cover"
                source={require("../assets/aatar4.png")}
              />
              <View style={[styles.benjaminWrapper, styles.ionmenuIconLayout]}>
                <Text style={[styles.benjamin1, styles.text1Typo]}>
                  Benjamin
                </Text>
              </View>
            </View>
            <View style={[styles.farita, styles.faritaLayout]}>
              <Image
                style={[styles.aatar, styles.aatarPosition]}
                contentFit="cover"
                source={require("../assets/aatar5.png")}
              />
              <View style={[styles.benjaminWrapper, styles.ionmenuIconLayout]}>
                <Text style={[styles.farita1, styles.text1Typo]}>Farita</Text>
              </View>
            </View>
            <View style={[styles.farita, styles.faritaLayout]}>
              <Image
                style={[styles.aatar, styles.aatarPosition]}
                contentFit="cover"
                source={require("../assets/aatar5.png")}
              />
              <View style={[styles.benjaminWrapper, styles.ionmenuIconLayout]}>
                <Text style={[styles.farita1, styles.text1Typo]}>Claire</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.miDiarioPantallaPersonalInner} />
        <Pressable
          style={styles.frameParent5}
          onPress={() => navigation.navigate("MIDIARIOENTRADATEXTOPL6")}
        >
          <View style={styles.frameParent6}>
            <View style={styles.frameParent7}>
              <View style={styles.aatarWrapper}>
                <Image
                  style={styles.aatarIcon3}
                  contentFit="cover"
                  source={require("../assets/aatar7.png")}
                />
              </View>
              <View style={styles.parent}>
                <Text style={[styles.text1, styles.text1Typo]}>07</Text>
                <Text style={[styles.jul2023, styles.text1Typo]}>
                  jul. 2023
                </Text>
              </View>
            </View>
            <Text style={styles.hoyHemosVisitado}>
              Hoy hemos visitado en Tokio un restaurante que nos ha encantado...
            </Text>
          </View>
          <View style={styles.frameParent8}>
            <View style={styles.frameParent7}>
              <View style={styles.aatarWrapper}>
                <Image
                  style={styles.aatarIcon3}
                  contentFit="cover"
                  source={require("../assets/aatar7.png")}
                />
              </View>
              <View style={styles.parent}>
                <Text style={[styles.text1, styles.text1Typo]}>07</Text>
                <Text style={[styles.jul2023, styles.text1Typo]}>
                  jul. 2023
                </Text>
              </View>
            </View>
            <Text style={styles.hoyHemosVisitado}>
              Uriel y yo estamos muy contentos de empezar nuestro viaje a
              Japón...
            </Text>
          </View>
          <View style={styles.frameParent8}>
            <View style={styles.frameParent7}>
              <View style={styles.aatarWrapper}>
                <Image
                  style={styles.aatarIcon3}
                  contentFit="cover"
                  source={require("../assets/aatar7.png")}
                />
              </View>
              <View style={styles.parent}>
                <Text style={[styles.text1, styles.text1Typo]}>07</Text>
                <Text style={[styles.jul2023, styles.text1Typo]}>
                  jul. 2023
                </Text>
              </View>
            </View>
            <Text style={styles.hoyHemosVisitado}>
              Uriel y yo estamos muy contentos de empezar nuestro viaje a
              Japón...
            </Text>
          </View>
        </Pressable>
        <View style={styles.ltimasEntradasParent}>
          <Text style={[styles.ltimosDiariosFamiliares, styles.textTypo]}>
            Últimas entradas
          </Text>
          <Image
            style={styles.iconlyboldfilter2}
            contentFit="cover"
            source={require("../assets/iconlyboldfilter21.png")}
          />
        </View>
        <Image
          style={[styles.navigationIcon, styles.navigationIconPosition]}
          contentFit="cover"
          source={require("../assets/navigation22.png")}
        />
        <View style={styles.frameParent12}>
          <View style={styles.ionmenuParent}>
            <Image
              style={[styles.ionmenuIcon, styles.ionmenuIconLayout]}
              contentFit="cover"
              source={require("../assets/ionmenu2.png")}
            />
            <Text style={[styles.miDiario, styles.textTypo]}>Mi Diario</Text>
          </View>
          <Pressable
            style={styles.iconlylightOutlineinfoSqua}
            onPress={openIconlyLightOutlineInfoSqua}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/iconlylightoutlineinfosquare.png")}
            />
          </Pressable>
        </View>
      </View>

      <Modal
        animationType="fade"
        transparent
        visible={iconlyLightOutlineInfoSquaVisible}
      >
        <View style={styles.iconlyLightOutlineInfoSquaOverlay}>
          <Pressable
            style={styles.iconlyLightOutlineInfoSquaBg}
            onPress={closeIconlyLightOutlineInfoSqua}
          />
          <PopupDiario onClose={closeIconlyLightOutlineInfoSqua} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  frameChildLayout: {
    zIndex: 0,
    height: 61,
    borderRadius: Border.br_8xs,
    width: 388,
  },
  textTypo: {
    textAlign: "left",
    fontFamily: FontFamily.lato,
  },
  frameParentPosition: {
    justifyContent: "space-between",
    top: "50%",
    zIndex: 1,
    alignItems: "center",
    flexDirection: "row",
    width: 348,
    left: 20,
    position: "absolute",
  },
  navigationIconPosition: {
    width: 428,
    left: 0,
    position: "absolute",
  },
  documentIconLayout: {
    marginLeft: 30,
    height: 24,
    width: 24,
  },
  aatarPosition: {
    width: 70,
    left: 0,
    position: "absolute",
  },
  ionmenuIconLayout: {
    height: 20,
    overflow: "hidden",
  },
  text1Typo: {
    textAlign: "center",
    letterSpacing: 0,
    color: Color.negro,
    fontFamily: FontFamily.lato,
  },
  faritaLayout: {
    height: 90,
    width: 70,
  },
  frameChild: {
    backgroundColor: Color.colorAntiquewhite,
  },
  enBlancoO: {
    lineHeight: 24,
    fontWeight: "500",
    color: Color.negro,
    textAlign: "left",
    fontFamily: FontFamily.lato,
    fontSize: FontSize.size_xl,
  },
  cilpencilIcon: {
    width: 22,
    height: 22,
    marginLeft: 84,
    overflow: "hidden",
  },
  text: {
    lineHeight: 29,
    fontWeight: "300",
    fontSize: FontSize.size_5xl,
    marginLeft: 84,
    color: Color.negro,
    textAlign: "left",
    fontFamily: FontFamily.lato,
  },
  frameGroup: {
    top: 16,
    zIndex: 1,
    width: 348,
    alignItems: "center",
    flexDirection: "row",
    left: 20,
    position: "absolute",
  },
  frameItem: {
    backgroundColor: Color.colorLavenderblush,
  },
  vectorIcon: {
    height: 28,
    width: 26,
  },
  frameContainer: {
    marginTop: -14.5,
  },
  rectangleGroup: {
    marginTop: 20,
  },
  frameInner: {
    backgroundColor: Color.colorLavender_100,
  },
  vectorIcon1: {
    width: 24,
    height: 28,
  },
  frameParent1: {
    marginTop: -14,
  },
  rectangleView: {
    backgroundColor: Color.colorLightcyan,
  },
  frameChild1: {
    backgroundColor: Color.colorHoneydew_200,
  },
  vectorIcon3: {
    height: 24,
    width: 26,
  },
  frameParent3: {
    marginTop: -12.5,
  },
  frameChild2: {
    backgroundColor: Color.colorOldlace,
  },
  vectorIcon4: {
    height: 18,
    width: 26,
  },
  frameParent: {
    top: 299,
    height: 261,
    left: 20,
    position: "absolute",
  },
  miDiarioPantallaPersonalChild: {
    top: 560,
    left: -3,
    width: 431,
    height: 380,
    position: "absolute",
    backgroundColor: Color.white,
  },
  miDiarioPantallaPersonalItem: {
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowRadius: 25,
    elevation: 25,
    shadowOpacity: 1,
    height: 279,
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
  ltimosDiariosFamiliares: {
    color: Color.primario2,
    fontWeight: "700",
    textAlign: "left",
    fontFamily: FontFamily.lato,
    fontSize: FontSize.size_xl,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  aatar: {
    height: 70,
    top: 0,
  },
  benjamin1: {
    left: 10,
    fontWeight: "600",
    lineHeight: 22,
    fontSize: FontSize.footnote_size,
    top: -1,
    textAlign: "center",
    position: "absolute",
  },
  benjaminWrapper: {
    top: 70,
    width: 70,
    left: 0,
    position: "absolute",
  },
  farita1: {
    fontWeight: "600",
    lineHeight: 22,
    fontSize: FontSize.footnote_size,
    top: -1,
    textAlign: "center",
    position: "absolute",
    left: 20,
  },
  farita: {
    marginLeft: 20,
  },
  marie1: {
    left: 19,
    fontWeight: "600",
    lineHeight: 22,
    fontSize: FontSize.footnote_size,
    top: -1,
    textAlign: "center",
    position: "absolute",
  },
  stories: {
    width: 408,
    marginTop: 20,
    flexDirection: "row",
  },
  ltimosDiariosFamiliaresPublParent: {
    top: 127,
    left: 20,
    position: "absolute",
  },
  miDiarioPantallaPersonalInner: {
    top: 580,
    borderStyle: "solid",
    borderColor: Color.secundario,
    borderTopWidth: 1,
    width: 389,
    height: 1,
    left: 20,
    position: "absolute",
  },
  aatarIcon3: {
    width: 36,
    height: 36,
  },
  aatarWrapper: {
    alignItems: "center",
  },
  text1: {
    lineHeight: 36,
    fontWeight: "700",
    fontSize: FontSize.size_5xl,
  },
  jul2023: {
    lineHeight: 30,
    marginLeft: 10,
    fontSize: FontSize.size_xl,
  },
  parent: {
    marginLeft: 8,
    alignItems: "center",
    flexDirection: "row",
  },
  frameParent7: {
    flexDirection: "row",
  },
  hoyHemosVisitado: {
    fontSize: FontSize.size_lg,
    lineHeight: 27,
    display: "flex",
    letterSpacing: 0,
    marginTop: 20,
    textAlign: "left",
    color: Color.negro,
    fontFamily: FontFamily.lato,
    alignItems: "center",
    width: 388,
  },
  frameParent6: {
    width: 388,
  },
  frameParent8: {
    marginTop: 20,
    width: 388,
  },
  frameParent5: {
    top: 644,
    height: 163,
    left: 20,
    position: "absolute",
  },
  iconlyboldfilter2: {
    marginLeft: 213,
    height: 24,
    width: 24,
  },
  ltimasEntradasParent: {
    top: 600,
    flexDirection: "row",
    left: 20,
    position: "absolute",
  },
  navigationIcon: {
    top: 822,
    height: 105,
  },
  ionmenuIcon: {
    width: 26,
  },
  miDiario: {
    marginLeft: 118,
    fontWeight: "700",
    fontSize: FontSize.size_5xl,
    color: Color.negro,
    textAlign: "left",
    fontFamily: FontFamily.lato,
  },
  ionmenuParent: {
    alignItems: "center",
    flexDirection: "row",
  },
  iconlyLightOutlineInfoSquaOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  iconlyLightOutlineInfoSquaBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  iconlylightOutlineinfoSqua: {
    width: 29,
    height: 29,
    marginLeft: 17,
  },
  frameParent12: {
    top: 78,
    flexDirection: "row",
    left: 20,
    position: "absolute",
  },
  miDiarioPantallaPersonal: {
    borderRadius: Border.br_31xl,
    flex: 1,
    height: 926,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default MIDIARIOPANTALLAPERSONAL;
