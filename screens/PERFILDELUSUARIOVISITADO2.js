import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Padding, Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const PERFILDELUSUARIOVISITADO2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.perfilDelUsuarioVisitado}>
      <Image
        style={[styles.navigationIcon, styles.frameParentPosition]}
        contentFit="cover"
        source={require("../assets/navigation28.png")}
      />
      <View style={[styles.frameParent, styles.tabsPosition1]}>
        <View style={styles.frameGroup}>
          <View style={styles.frameGroup}>
            <View style={styles.frameGroup}>
              <View style={styles.frameParent1}>
                <View>
                  <View style={styles.image6Parent}>
                    <Image
                      style={styles.image6Icon}
                      contentFit="cover"
                      source={require("../assets/image-6.png")}
                    />
                    <View style={[styles.messageParent, styles.buttonFlexBox]}>
                      <Image
                        style={styles.iconLayout}
                        contentFit="cover"
                        source={require("../assets/message2.png")}
                      />
                      <Pressable
                        style={[
                          styles.iconlylightOutlinecalendar,
                          styles.iconLayout,
                        ]}
                        onPress={() => navigation.navigate("CALENDARIO")}
                      >
                        <Image
                          style={styles.icon}
                          contentFit="cover"
                          source={require("../assets/iconlylightoutlinecalendar4.png")}
                        />
                      </Pressable>
                      <Image
                        style={[
                          styles.iconlylightOutlinecalendar,
                          styles.iconLayout,
                        ]}
                        contentFit="cover"
                        source={require("../assets/iconlylightoutlinesetting6.png")}
                      />
                    </View>
                  </View>
                  <Image
                    style={styles.ionmenuIcon}
                    contentFit="cover"
                    source={require("../assets/ionmenu.png")}
                  />
                </View>
                <View style={styles.frameParent3}>
                  <View style={styles.image6Parent}>
                    <View style={styles.frameGroup}>
                      <Pressable
                        style={styles.wrapper}
                        onPress={() =>
                          navigation.navigate("PERFILDELUSUARIOVISITADO2")
                        }
                      >
                        <Image
                          style={styles.icon}
                          contentFit="cover"
                          source={require("../assets/group-1171276677.png")}
                        />
                      </Pressable>
                      <View style={styles.frameWrapper}>
                        <View style={styles.frameGroup}>
                          <Text style={styles.tomsPham}>Tomás Pham</Text>
                          <Text style={styles.primo}>Primo</Text>
                        </View>
                      </View>
                    </View>
                    <View style={styles.groupContainer}>
                      <Image
                        style={styles.frameChild}
                        contentFit="cover"
                        source={require("../assets/group-1171276678.png")}
                      />
                      <View style={styles.brunoPhamParent}>
                        <Text style={styles.brunoPham}>Bruno Pham</Text>
                        <Text style={styles.daNangVietnam}>
                          Da Nang, Vietnam
                        </Text>
                      </View>
                    </View>
                  </View>
                  <LinearGradient
                    style={[styles.button, styles.buttonFlexBox]}
                    locations={[0, 1]}
                    colors={["#dee274", "#7ec18c"]}
                  >
                    <Text style={styles.signIn}>Salud</Text>
                  </LinearGradient>
                </View>
              </View>
              <View style={styles.tabsBar}>
                <Pressable
                  style={[styles.tabs, styles.tabsFlexBox]}
                  onPress={() => navigation.navigate("Perfil1")}
                >
                  <Text style={[styles.miLegado, styles.miInfoTypo]}>
                    Mi Legado
                  </Text>
                </Pressable>
                <Pressable
                  style={[styles.misLbumesWrapper, styles.tabs1Border]}
                  onPress={() => navigation.navigate("MisAlbumes1")}
                >
                  <Text style={[styles.misLbumes, styles.miInfoTypo]}>
                    Mis álbumes
                  </Text>
                </Pressable>
                <View style={[styles.tabs1, styles.tabs1Border]}>
                  <Text style={[styles.miInfo, styles.miInfoTypo]}>
                    Mi info
                  </Text>
                </View>
                <View style={[styles.tabsBarChild, styles.tabsPosition]} />
                <View style={[styles.tabsBarItem, styles.tabsPosition]} />
              </View>
            </View>
            <View style={styles.skillIconsinstagramParent}>
              <Image
                style={[styles.skillIconsinstagram, styles.skillLayout]}
                contentFit="cover"
                source={require("../assets/skilliconsinstagram3.png")}
              />
              <Image
                style={[styles.skillIconslinkedin, styles.skillLayout]}
                contentFit="cover"
                source={require("../assets/skilliconslinkedin3.png")}
              />
              <Image
                style={[styles.logostiktokIcon, styles.skillLayout]}
                contentFit="cover"
                source={require("../assets/logostiktokicon2.png")}
              />
              <Image
                style={[styles.skillIconslinkedin, styles.skillLayout]}
                contentFit="cover"
                source={require("../assets/deviconfacebook3.png")}
              />
            </View>
          </View>
          <View style={styles.frameParent5}>
            <View style={styles.frameParent1}>
              <Text style={styles.familiares}>Familiares</Text>
              <View style={styles.parent}>
                <Text style={[styles.text, styles.textTypo]}>25</Text>
                <View style={styles.ellipseParent}>
                  <Image
                    style={styles.frameItem}
                    contentFit="cover"
                    source={require("../assets/ellipse-71707.png")}
                  />
                  <Image
                    style={[styles.vectorIcon, styles.iconLayout]}
                    contentFit="cover"
                    source={require("../assets/vector50.png")}
                  />
                </View>
              </View>
            </View>
            <View style={styles.amigosParent}>
              <Text style={styles.familiares}>Amigos</Text>
              <View style={styles.parent}>
                <Text style={[styles.text, styles.textTypo]}>5</Text>
                <View style={styles.ellipseParent}>
                  <Image
                    style={styles.frameItem}
                    contentFit="cover"
                    source={require("../assets/ellipse-71707.png")}
                  />
                  <Image
                    style={[styles.vectorIcon, styles.iconLayout]}
                    contentFit="cover"
                    source={require("../assets/vector50.png")}
                  />
                </View>
              </View>
            </View>
            <View style={styles.amigosParent}>
              <Text style={[styles.logros, styles.textTypo]}>Logros</Text>
              <View style={styles.parent}>
                <Text style={[styles.text, styles.textTypo]}>40 Tree’s</Text>
                <View style={styles.ellipseParent}>
                  <Image
                    style={styles.frameItem}
                    contentFit="cover"
                    source={require("../assets/ellipse-71707.png")}
                  />
                  <Image
                    style={[styles.vectorIcon, styles.iconLayout]}
                    contentFit="cover"
                    source={require("../assets/vector50.png")}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.frameParentLayout}>
          <View style={styles.frameWrapperFlexBox}>
            <View style={styles.emailParent}>
              <Text style={[styles.email, styles.emailTypo]}>Email</Text>
              <Text style={[styles.barcelona818gmailcom, styles.emailTypo]}>
                barcelona818@gmail.com
              </Text>
            </View>
          </View>
          <View style={[styles.frameWrapper2, styles.frameWrapperFlexBox]}>
            <View style={styles.emailParent}>
              <Text style={[styles.email, styles.emailTypo]}>
                Nombre de pila
              </Text>
              <Text style={[styles.barcelona818gmailcom, styles.emailTypo]}>
                Bruno
              </Text>
            </View>
          </View>
          <View style={[styles.frameWrapper2, styles.frameWrapperFlexBox]}>
            <View style={styles.emailParent}>
              <Text style={[styles.email, styles.emailTypo]}>
                Nombre completo
              </Text>
              <Text style={[styles.barcelona818gmailcom, styles.emailTypo]}>
                Bruno Pham
              </Text>
            </View>
          </View>
          <View style={[styles.frameParent7, styles.frameParentLayout]}>
            <View style={styles.primerApellidoParent}>
              <Text style={[styles.email, styles.emailTypo]}>
                Primer apellido
              </Text>
              <Text style={[styles.barcelona818gmailcom, styles.emailTypo]}>
                Pham
              </Text>
            </View>
            <View style={styles.segundoApellidoParent}>
              <Text style={[styles.email, styles.emailTypo]}>
                Segundo apellido
              </Text>
              <Text style={[styles.barcelona818gmailcom, styles.emailTypo]}>
                Sin especificar
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameParentPosition: {
    marginLeft: -214,
    width: 428,
    left: "50%",
  },
  tabsPosition1: {
    top: 0,
    position: "absolute",
  },
  buttonFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  iconLayout: {
    height: 24,
    width: 24,
  },
  tabsFlexBox: {
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_9xs,
    borderRadius: Border.br_7xs,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  miInfoTypo: {
    lineHeight: 19,
    fontSize: FontSize.size_base,
    letterSpacing: 0,
    textAlign: "center",
    fontFamily: FontFamily.lato,
  },
  tabs1Border: {
    borderColor: Color.secundario,
    borderStyle: "solid",
    top: 0,
    position: "absolute",
  },
  tabsPosition: {
    height: 1,
    borderTopWidth: 1,
    top: 39,
    borderColor: Color.secundario,
    borderStyle: "solid",
    position: "absolute",
  },
  skillLayout: {
    height: 30,
    overflow: "hidden",
  },
  textTypo: {
    color: Color.primary,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.lato,
  },
  emailTypo: {
    fontWeight: "500",
    textAlign: "left",
    lineHeight: 19,
    fontSize: FontSize.size_base,
    letterSpacing: 0,
    fontFamily: FontFamily.lato,
  },
  frameWrapperFlexBox: {
    justifyContent: "flex-end",
    flexDirection: "row",
    alignItems: "center",
  },
  frameParentLayout: {
    width: 388,
    marginTop: 20,
  },
  navigationIcon: {
    top: 821,
    height: 105,
    width: 428,
    left: "50%",
    position: "absolute",
  },
  image6Icon: {
    width: 87,
    height: 55,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  iconlylightOutlinecalendar: {
    marginLeft: 20,
  },
  messageParent: {
    marginLeft: 189,
    flexDirection: "row",
  },
  image6Parent: {
    flexDirection: "row",
    alignItems: "center",
  },
  ionmenuIcon: {
    height: 20,
    marginTop: 10,
    width: 26,
    overflow: "hidden",
  },
  wrapper: {
    width: 50,
    height: 50,
  },
  tomsPham: {
    fontSize: FontSize.size_sm,
    lineHeight: 17,
    textAlign: "center",
    color: Color.negro,
    fontFamily: FontFamily.lato,
    fontWeight: "700",
  },
  primo: {
    color: Color.gris,
    fontWeight: "300",
    lineHeight: 18,
    letterSpacing: 0,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    fontFamily: FontFamily.lato,
  },
  frameGroup: {
    alignItems: "center",
  },
  frameWrapper: {
    marginTop: 10,
    alignItems: "center",
  },
  frameChild: {
    width: 120,
    height: 120,
  },
  brunoPham: {
    fontSize: FontSize.size_xl,
    lineHeight: 24,
    textAlign: "center",
    color: Color.negro,
    fontFamily: FontFamily.lato,
    fontWeight: "700",
  },
  daNangVietnam: {
    marginTop: 5,
    fontSize: FontSize.size_base,
    lineHeight: 24,
    color: Color.gris,
    fontWeight: "300",
    letterSpacing: 0,
    textAlign: "center",
    fontFamily: FontFamily.lato,
  },
  brunoPhamParent: {
    marginTop: 20,
    alignItems: "center",
  },
  groupContainer: {
    marginLeft: 49,
    alignItems: "center",
  },
  signIn: {
    color: Color.white,
    lineHeight: 18,
    letterSpacing: 0,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    fontFamily: FontFamily.lato,
  },
  button: {
    borderRadius: Border.br_11xl,
    width: 80,
    height: 28,
    paddingHorizontal: Padding.p_base,
    paddingTop: Padding.p_6xs,
    paddingBottom: Padding.p_5xs,
    backgroundColor: Color.linearBoton,
    marginLeft: 52,
    flexDirection: "row",
  },
  frameParent3: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "flex-end",
  },
  frameParent1: {
    alignItems: "flex-end",
  },
  miLegado: {
    width: 110,
    color: Color.gris,
  },
  tabs: {
    width: 142,
    left: 0,
    top: 0,
    position: "absolute",
  },
  misLbumes: {
    marginTop: -9.5,
    marginLeft: -43,
    top: "50%",
    color: Color.gris,
    left: "50%",
    position: "absolute",
  },
  misLbumesWrapper: {
    left: 142,
    borderBottomWidth: 1,
    height: 39,
    width: 142,
    overflow: "hidden",
  },
  miInfo: {
    color: Color.white,
    fontWeight: "700",
    lineHeight: 19,
  },
  tabs1: {
    left: 284,
    backgroundColor: Color.secundario,
    borderTopWidth: 0.5,
    width: 144,
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_9xs,
    borderRadius: Border.br_7xs,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
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
    height: 40,
    marginTop: 20,
    width: 428,
    backgroundColor: Color.white,
  },
  skillIconsinstagram: {
    width: 30,
    height: 30,
  },
  skillIconslinkedin: {
    width: 30,
    height: 30,
    marginLeft: 20,
  },
  logostiktokIcon: {
    width: 26,
    marginLeft: 20,
  },
  skillIconsinstagramParent: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  familiares: {
    textAlign: "left",
    color: Color.primary,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.lato,
  },
  text: {
    letterSpacing: 0.3,
    fontWeight: "800",
    textAlign: "right",
  },
  frameItem: {
    width: 35,
    height: 35,
    zIndex: 0,
  },
  vectorIcon: {
    top: 6,
    left: 6,
    zIndex: 1,
    position: "absolute",
  },
  ellipseParent: {
    marginLeft: 16,
    flexDirection: "row",
  },
  parent: {
    marginTop: 3,
    flexDirection: "row",
    alignItems: "center",
  },
  amigosParent: {
    marginLeft: 52,
    alignItems: "flex-end",
  },
  logros: {
    display: "flex",
    width: 154,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  frameParent5: {
    marginTop: 29,
    flexDirection: "row",
  },
  email: {
    color: Color.negro,
  },
  barcelona818gmailcom: {
    color: Color.grisGeneral,
    marginTop: 10,
  },
  emailParent: {
    width: 347,
  },
  frameWrapper2: {
    marginTop: 20,
  },
  primerApellidoParent: {
    width: 187,
  },
  segundoApellidoParent: {
    width: 181,
    marginLeft: 20,
  },
  frameParent7: {
    flexDirection: "row",
  },
  frameParent: {
    height: 809,
    padding: Padding.p_xl,
    alignItems: "center",
    width: 428,
    left: "50%",
    marginLeft: -214,
  },
  perfilDelUsuarioVisitado: {
    borderRadius: Border.br_31xl,
    flex: 1,
    height: 926,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default PERFILDELUSUARIOVISITADO2;
