import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Padding, Border } from "../GlobalStyles";

const PERFILAJUSTESVERIFICACIO = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.perfilAjustesVerificacio, styles.iconLayout1]}>
      <Image
        style={[styles.hugeIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/hugeicon.png")}
      />
      <Image
        style={styles.navigationIcon}
        contentFit="cover"
        source={require("../assets/navigation28.png")}
      />
      <View style={[styles.frameParent, styles.frameParentPosition]}>
        <View style={styles.frameGroup}>
          <View style={styles.image6Parent}>
            <Image
              style={styles.image6Icon}
              contentFit="cover"
              source={require("../assets/image-6.png")}
            />
            <View style={styles.iconlylightOutlinecalendarParent}>
              <Image
                style={styles.userIconLayout}
                contentFit="cover"
                source={require("../assets/iconlylightoutlinecalendar4.png")}
              />
              <Image
                style={[styles.documentIcon, styles.documentIconLayout]}
                contentFit="cover"
                source={require("../assets/document7.png")}
              />
              <Image
                style={styles.documentIconLayout}
                contentFit="cover"
                source={require("../assets/iconlylightoutlinesetting6.png")}
              />
            </View>
          </View>
          <View style={[styles.backParent, styles.parentFlexBox]}>
            <Pressable
              style={styles.userIconLayout}
              onPress={() => navigation.navigate("PERFILAJUSTES")}
            >
              <Image
                style={[styles.icon, styles.iconLayout1]}
                contentFit="cover"
                source={require("../assets/back.png")}
              />
            </Pressable>
            <Text style={styles.verificacinMytree}>Verificación MyTree</Text>
          </View>
        </View>
        <View
          style={[styles.tienes7DasParaConseguirTParent, styles.parentFlexBox]}
        >
          <Text style={styles.tienes7Das}>
            ¡Tienes 7 días para conseguir tu cuenta verificada!
          </Text>
          <View style={styles.lineasParent}>
            <Image
              style={styles.lineasIcon}
              contentFit="cover"
              source={require("../assets/lineas.png")}
            />
            <View style={[styles.ellipseParent, styles.parentFlexBox]}>
              <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require("../assets/ellipse-7156.png")}
              />
              <Text style={[styles.text, styles.textPosition]}>1</Text>
            </View>
            <View style={[styles.ellipseGroup, styles.frameParentPosition]}>
              <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require("../assets/ellipse-7156.png")}
              />
              <Text style={[styles.text, styles.textPosition]}>2</Text>
            </View>
            <View style={[styles.ellipseContainer, styles.frameParentPosition]}>
              <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require("../assets/ellipse-7156.png")}
              />
              <Text style={[styles.text, styles.textPosition]}>3</Text>
            </View>
            <View style={[styles.frameView, styles.frameParentPosition]}>
              <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require("../assets/ellipse-7156.png")}
              />
              <Text style={[styles.text, styles.textPosition]}>4</Text>
            </View>
            <View style={[styles.ellipseParent1, styles.frameParentPosition]}>
              <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require("../assets/ellipse-7156.png")}
              />
              <Text style={[styles.text, styles.textPosition]}>5</Text>
            </View>
            <View style={[styles.ellipseParent2, styles.frameParentPosition]}>
              <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require("../assets/ellipse-7156.png")}
              />
              <Text style={[styles.text, styles.textPosition]}>6</Text>
            </View>
            <View style={[styles.ellipseParent3, styles.parentFlexBox]}>
              <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require("../assets/ellipse-7162.png")}
              />
              <Text style={[styles.text6, styles.textPosition]}>7</Text>
            </View>
          </View>
          <View style={styles.pasosASeguirParent}>
            <Text style={styles.tienes7Das}>Pasos a seguir</Text>
            <View style={styles.pasosASeguirParent}>
              <View style={styles.image6Parent}>
                <View style={[styles.check, styles.checkLayout]}>
                  <View style={styles.checkChild} />
                  <Image
                    style={[styles.vectorIcon, styles.iconLayout]}
                    contentFit="cover"
                    source={require("../assets/vector.png")}
                  />
                </View>
                <View style={styles.userParent}>
                  <Image
                    style={[styles.userIcon, styles.userIconLayout]}
                    contentFit="cover"
                    source={require("../assets/3-user.png")}
                  />
                  <Text
                    style={[
                      styles.familiaresYoAmigos,
                      styles.crearUnaEntradaTypo,
                    ]}
                  >{`15 familiares y/o amigos 
Añadiendo parentesco o grupo de amistad`}</Text>
                </View>
              </View>
              <View style={styles.checkGroup}>
                <View style={[styles.check, styles.checkLayout]}>
                  <View style={styles.checkChild} />
                  <Image
                    style={[styles.vectorIcon, styles.iconLayout]}
                    contentFit="cover"
                    source={require("../assets/vector.png")}
                  />
                </View>
                <View style={styles.userParent}>
                  <Image
                    style={[styles.imageIcon, styles.checkLayout]}
                    contentFit="cover"
                    source={require("../assets/image4.png")}
                  />
                  <Text
                    style={[
                      styles.familiaresYoAmigos,
                      styles.crearUnaEntradaTypo,
                    ]}
                  >
                    1 foto en mis etapas
                  </Text>
                </View>
              </View>
              <View style={styles.checkGroup}>
                <View style={[styles.check, styles.checkLayout]}>
                  <View style={styles.checkChild} />
                  <Image
                    style={[styles.vectorIcon, styles.iconLayout]}
                    contentFit="cover"
                    source={require("../assets/vector.png")}
                  />
                </View>
                <View style={styles.userParent}>
                  <Image
                    style={[styles.imageIcon, styles.checkLayout]}
                    contentFit="cover"
                    source={require("../assets/image4.png")}
                  />
                  <Text
                    style={[
                      styles.familiaresYoAmigos,
                      styles.crearUnaEntradaTypo,
                    ]}
                  >
                    1 foto biografía
                  </Text>
                </View>
              </View>
              <View style={styles.checkGroup}>
                <View style={[styles.check, styles.checkLayout]}>
                  <View style={styles.checkChild} />
                  <Image
                    style={[styles.vectorIcon, styles.iconLayout]}
                    contentFit="cover"
                    source={require("../assets/vector.png")}
                  />
                </View>
                <View style={styles.userParent}>
                  <Image
                    style={[styles.imageIcon, styles.checkLayout]}
                    contentFit="cover"
                    source={require("../assets/image4.png")}
                  />
                  <Text
                    style={[
                      styles.familiaresYoAmigos,
                      styles.crearUnaEntradaTypo,
                    ]}
                  >
                    1 foto con familiares y etiquetarlos
                  </Text>
                </View>
              </View>
              <View style={styles.checkGroup}>
                <View style={[styles.check, styles.checkLayout]}>
                  <View style={styles.checkChild} />
                  <Image
                    style={[styles.vectorIcon, styles.iconLayout]}
                    contentFit="cover"
                    source={require("../assets/vector.png")}
                  />
                </View>
                <View style={styles.userParent}>
                  <Image
                    style={[styles.imageIcon, styles.checkLayout]}
                    contentFit="cover"
                    source={require("../assets/image4.png")}
                  />
                  <Text
                    style={[
                      styles.familiaresYoAmigos,
                      styles.crearUnaEntradaTypo,
                    ]}
                  >
                    1 foto con amigos y etiquetarlos
                  </Text>
                </View>
              </View>
              <View style={styles.checkGroup}>
                <View style={[styles.check, styles.checkLayout]}>
                  <View style={styles.checkChild} />
                  <Image
                    style={[styles.vectorIcon, styles.iconLayout]}
                    contentFit="cover"
                    source={require("../assets/vector.png")}
                  />
                </View>
                <Image
                  style={styles.documentIcon1}
                  contentFit="cover"
                  source={require("../assets/document8.png")}
                />
                <View style={styles.userParent}>
                  <Text style={styles.crearUnaEntradaTypo}>
                    Crear una entrada al diario
                  </Text>
                </View>
              </View>
              <View style={styles.checkGroup}>
                <View style={[styles.check, styles.checkLayout]}>
                  <View style={styles.checkChild} />
                </View>
                <View style={styles.userParent}>
                  <Image
                    style={[styles.imageIcon, styles.checkLayout]}
                    contentFit="cover"
                    source={require("../assets/image4.png")}
                  />
                  <Text
                    style={[
                      styles.familiaresYoAmigos,
                      styles.crearUnaEntradaTypo,
                    ]}
                  >
                    Añadir una foto de tu armario al álbum general
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout1: {
    width: "100%",
    overflow: "hidden",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  frameParentPosition: {
    top: 0,
    position: "absolute",
  },
  documentIconLayout: {
    marginLeft: 30,
    height: 24,
    width: 24,
  },
  parentFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  textPosition: {
    zIndex: 1,
    fontWeight: "500",
    lineHeight: 14,
    fontSize: FontSize.size_xs,
    left: 9,
    top: 5,
    letterSpacing: 0,
    textAlign: "left",
    fontFamily: FontFamily.lato,
    position: "absolute",
  },
  checkLayout: {
    width: 20,
    height: 20,
  },
  userIconLayout: {
    height: 24,
    width: 24,
  },
  crearUnaEntradaTypo: {
    width: 308,
    textAlign: "justify",
    color: Color.gris,
    fontWeight: "500",
    lineHeight: 14,
    fontSize: FontSize.size_xs,
    letterSpacing: 0,
    fontFamily: FontFamily.lato,
  },
  hugeIcon: {
    height: "2.59%",
    width: "5.61%",
    top: "65.55%",
    right: "65.42%",
    bottom: "31.86%",
    left: "28.97%",
  },
  navigationIcon: {
    top: 821,
    width: 428,
    height: 105,
    left: 0,
    position: "absolute",
  },
  image6Icon: {
    width: 87,
    height: 55,
  },
  documentIcon: {
    overflow: "hidden",
  },
  iconlylightOutlinecalendarParent: {
    width: 189,
    justifyContent: "flex-end",
    marginLeft: 112,
    flexDirection: "row",
  },
  image6Parent: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  verificacinMytree: {
    fontSize: FontSize.size_5xl,
    fontWeight: "700",
    marginLeft: 20,
    textAlign: "left",
    color: Color.negro,
    fontFamily: FontFamily.lato,
  },
  backParent: {
    marginTop: 20,
    flexDirection: "row",
  },
  frameGroup: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    paddingHorizontal: Padding.p_xl,
    paddingBottom: Padding.p_xl,
    backgroundColor: Color.white,
  },
  tienes7Das: {
    fontSize: FontSize.size_lg,
    lineHeight: 22,
    letterSpacing: 0,
    textAlign: "left",
    color: Color.negro,
    fontFamily: FontFamily.lato,
  },
  lineasIcon: {
    marginTop: -1.5,
    top: "50%",
    left: 18,
    width: 242,
    height: 3,
    position: "absolute",
  },
  frameChild: {
    width: 25,
    zIndex: 0,
    height: 25,
  },
  text: {
    color: Color.white,
  },
  ellipseParent: {
    flexDirection: "row",
    top: 0,
    position: "absolute",
    left: 0,
  },
  ellipseGroup: {
    left: 40,
    flexDirection: "row",
  },
  ellipseContainer: {
    left: 80,
    flexDirection: "row",
  },
  frameView: {
    left: 120,
    flexDirection: "row",
  },
  ellipseParent1: {
    left: 160,
    flexDirection: "row",
  },
  ellipseParent2: {
    left: 200,
    flexDirection: "row",
  },
  text6: {
    color: Color.grisGeneral,
  },
  ellipseParent3: {
    left: 240,
    flexDirection: "row",
    top: 0,
    position: "absolute",
  },
  lineasParent: {
    width: 265,
    height: 25,
    marginTop: 20,
  },
  checkChild: {
    height: "105%",
    width: "105%",
    top: "-2.5%",
    right: "-2.5%",
    bottom: "-2.5%",
    left: "-2.5%",
    borderRadius: 3,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro_100,
    borderWidth: 1,
    position: "absolute",
    backgroundColor: Color.white,
  },
  vectorIcon: {
    height: "34.5%",
    width: "45%",
    top: "35%",
    right: "30%",
    bottom: "30.5%",
    left: "25%",
  },
  check: {
    height: 20,
  },
  userIcon: {
    overflow: "hidden",
  },
  familiaresYoAmigos: {
    marginLeft: 9,
  },
  userParent: {
    marginLeft: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  imageIcon: {
    height: 20,
    overflow: "hidden",
  },
  checkGroup: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  documentIcon1: {
    width: 18,
    height: 20,
    marginLeft: 20,
    overflow: "hidden",
  },
  pasosASeguirParent: {
    marginTop: 20,
  },
  tienes7DasParaConseguirTParent: {
    padding: Padding.p_xl,
    marginTop: 3,
    backgroundColor: Color.white,
  },
  frameParent: {
    alignItems: "center",
    left: 0,
    height: 926,
  },
  perfilAjustesVerificacio: {
    borderRadius: Border.br_31xl,
    flex: 1,
    overflow: "hidden",
    height: 926,
    backgroundColor: Color.white,
  },
});

export default PERFILAJUSTESVERIFICACIO;
