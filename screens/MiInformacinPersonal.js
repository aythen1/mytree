import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const MiInformacinPersonal = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.miInformacinPersonal, styles.iconLayout]}>
      <View
        style={[styles.miInformacinPersonalInner, styles.backParentPosition]}
      >
        <View>
          <View style={[styles.faritaParent, styles.parentFlexBox]}>
            <Image
              style={styles.faritaIcon}
              contentFit="cover"
              source={require("../assets/farita.png")}
            />
            <View style={[styles.frameWrapper, styles.parentFlexBox]}>
              <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require("../assets/frame-11712750111.png")}
              />
            </View>
          </View>
          <View style={[styles.frameContainer, styles.frameContainerFlexBox]}>
            <View style={styles.fechaDeNacimientoParent}>
              <Text
                style={[styles.fechaDeNacimiento, styles.fechaDeNacimientoTypo]}
              >
                Fecha de nacimiento
              </Text>
              <Text style={[styles.text, styles.textTypo]}>02/12/1997</Text>
            </View>
          </View>
          <View style={[styles.frameContainer, styles.frameContainerFlexBox]}>
            <View style={styles.fechaDeNacimientoParent}>
              <Text
                style={[styles.fechaDeNacimiento, styles.fechaDeNacimientoTypo]}
              >
                Ubicación
              </Text>
              <Text style={[styles.text, styles.textTypo]}>
                Da Nang, Vietnam
              </Text>
            </View>
          </View>
          <Image
            style={styles.frameItem}
            contentFit="cover"
            source={require("../assets/line-802.png")}
          />
          <View style={[styles.frameContainer, styles.frameContainerFlexBox]}>
            <View style={styles.fechaDeNacimientoParent}>
              <Text
                style={[styles.fechaDeNacimiento, styles.fechaDeNacimientoTypo]}
              >
                Madre
              </Text>
              <Text style={[styles.text, styles.textTypo]}>Mary Jane</Text>
            </View>
          </View>
          <View style={[styles.frameContainer, styles.frameContainerFlexBox]}>
            <View style={styles.fechaDeNacimientoParent}>
              <Text
                style={[styles.fechaDeNacimiento, styles.fechaDeNacimientoTypo]}
              >
                Padre
              </Text>
              <Text style={[styles.text, styles.textTypo]}>Peter Parker</Text>
            </View>
          </View>
          <Image
            style={styles.frameItem}
            contentFit="cover"
            source={require("../assets/line-802.png")}
          />
          <View style={[styles.frameContainer, styles.frameContainerFlexBox]}>
            <View style={styles.fechaDeNacimientoParent}>
              <Text
                style={[styles.fechaDeNacimiento, styles.fechaDeNacimientoTypo]}
              >
                Hermanos
              </Text>
              <Text style={[styles.text, styles.textTypo]}>Ninguno</Text>
            </View>
          </View>
          <Image
            style={styles.frameItem}
            contentFit="cover"
            source={require("../assets/line-802.png")}
          />
          <View style={[styles.frameContainer, styles.frameContainerFlexBox]}>
            <View style={styles.fechaDeNacimientoParent}>
              <Text
                style={[styles.fechaDeNacimiento, styles.fechaDeNacimientoTypo]}
              >
                Estado Civíl
              </Text>
              <Text style={[styles.text, styles.textTypo]}>
                Casado con Pirita García
              </Text>
            </View>
          </View>
          <View style={[styles.frameContainer, styles.frameContainerFlexBox]}>
            <View style={styles.fechaDeNacimientoParent}>
              <Text
                style={[styles.fechaDeNacimiento, styles.fechaDeNacimientoTypo]}
              >
                Redes Sociales
              </Text>
              <View style={styles.frameGroup}>
                <View style={styles.backParentFlexBox}>
                  <View
                    style={[
                      styles.skillIconsinstagramParent,
                      styles.parentFlexBox,
                    ]}
                  >
                    <Image
                      style={[
                        styles.skillIconsinstagram,
                        styles.logostiktokIconLayout,
                      ]}
                      contentFit="cover"
                      source={require("../assets/skilliconsinstagram.png")}
                    />
                    <Text style={[styles.nombredeusuario, styles.textTypo]}>
                      @nombredeusuario
                    </Text>
                  </View>
                </View>
                <View
                  style={[
                    styles.skillIconslinkedinParent,
                    styles.parentFlexBox,
                  ]}
                >
                  <Image
                    style={[
                      styles.skillIconsinstagram,
                      styles.logostiktokIconLayout,
                    ]}
                    contentFit="cover"
                    source={require("../assets/skilliconslinkedin.png")}
                  />
                  <Text style={[styles.nombredeusuario, styles.textTypo]}>
                    @nombredeusuario
                  </Text>
                </View>
                <View
                  style={[
                    styles.skillIconslinkedinParent,
                    styles.parentFlexBox,
                  ]}
                >
                  <Image
                    style={[
                      styles.logostiktokIcon,
                      styles.logostiktokIconLayout,
                    ]}
                    contentFit="cover"
                    source={require("../assets/logostiktokicon.png")}
                  />
                  <Text style={[styles.nombredeusuario, styles.textTypo]}>
                    @nombredeusuario
                  </Text>
                </View>
                <View
                  style={[
                    styles.skillIconslinkedinParent,
                    styles.parentFlexBox,
                  ]}
                >
                  <Image
                    style={[
                      styles.skillIconsinstagram,
                      styles.logostiktokIconLayout,
                    ]}
                    contentFit="cover"
                    source={require("../assets/deviconfacebook.png")}
                  />
                  <Text style={[styles.nombredeusuario, styles.textTypo]}>
                    @nombredeusuario
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <Image
            style={styles.frameItem}
            contentFit="cover"
            source={require("../assets/line-801.png")}
          />
        </View>
      </View>
      <View
        style={[
          styles.miInformacinPersonalChild,
          styles.navigationIconPosition,
        ]}
      />
      <View style={[styles.backParent, styles.backParentFlexBox]}>
        <Pressable
          style={styles.back}
          onPress={() => navigation.navigate("PERFILMIINFO")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/back.png")}
          />
        </Pressable>
        <Text
          style={[styles.miInformacinPersonal1, styles.fechaDeNacimientoTypo]}
        >
          Mi Información Personal
        </Text>
      </View>
      <Image
        style={[styles.image6Icon, styles.backParentPosition]}
        contentFit="cover"
        source={require("../assets/image-6.png")}
      />
      <View
        style={[
          styles.iconlylightOutlinecalendarParent,
          styles.frameContainerFlexBox,
        ]}
      >
        <Image
          style={styles.back}
          contentFit="cover"
          source={require("../assets/iconlylightoutlinecalendar.png")}
        />
        <Image
          style={[styles.documentIcon, styles.documentIconLayout]}
          contentFit="cover"
          source={require("../assets/document2.png")}
        />
        <Image
          style={styles.documentIconLayout}
          contentFit="cover"
          source={require("../assets/iconlylightoutlinesetting.png")}
        />
      </View>
      <Image
        style={[styles.navigationIcon, styles.navigationIconPosition]}
        contentFit="cover"
        source={require("../assets/navigation1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  backParentPosition: {
    left: 20,
    position: "absolute",
  },
  parentFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  frameContainerFlexBox: {
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  fechaDeNacimientoTypo: {
    textAlign: "left",
    color: Color.negro,
    fontFamily: FontFamily.lato,
  },
  textTypo: {
    color: Color.grisGeneral,
    textAlign: "left",
    fontFamily: FontFamily.lato,
    fontWeight: "500",
    lineHeight: 19,
    letterSpacing: 0,
    fontSize: FontSize.size_base,
  },
  logostiktokIconLayout: {
    width: 20,
    overflow: "hidden",
  },
  navigationIconPosition: {
    width: 428,
    left: 0,
    position: "absolute",
  },
  backParentFlexBox: {
    justifyContent: "center",
    flexDirection: "row",
  },
  documentIconLayout: {
    marginLeft: 30,
    height: 24,
    width: 24,
  },
  faritaIcon: {
    width: 70,
    height: 70,
  },
  frameChild: {
    height: 19,
    width: 87,
  },
  frameWrapper: {
    marginLeft: 38,
    width: 87,
    alignItems: "center",
  },
  faritaParent: {
    alignItems: "center",
    width: 388,
  },
  fechaDeNacimiento: {
    fontWeight: "500",
    lineHeight: 19,
    letterSpacing: 0,
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.negro,
    fontFamily: FontFamily.lato,
  },
  text: {
    marginTop: 10,
  },
  fechaDeNacimientoParent: {
    width: 347,
  },
  frameContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  frameItem: {
    maxHeight: "100%",
    marginTop: 20,
    width: 388,
  },
  skillIconsinstagram: {
    height: 20,
  },
  nombredeusuario: {
    marginLeft: 10,
  },
  skillIconsinstagramParent: {
    alignItems: "center",
  },
  skillIconslinkedinParent: {
    marginTop: 10,
    alignItems: "center",
  },
  logostiktokIcon: {
    height: 23,
  },
  frameGroup: {
    marginTop: 10,
  },
  miInformacinPersonalInner: {
    top: 147,
    height: 655,
  },
  miInformacinPersonalChild: {
    top: 0,
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowRadius: 25,
    elevation: 25,
    shadowOpacity: 1,
    height: 127,
    backgroundColor: Color.white,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  back: {
    height: 24,
    width: 24,
  },
  miInformacinPersonal1: {
    fontSize: FontSize.size_5xl,
    fontWeight: "700",
    width: 270,
    marginLeft: 20,
  },
  backParent: {
    top: 78,
    alignItems: "center",
    left: 20,
    position: "absolute",
  },
  image6Icon: {
    top: 3,
    height: 55,
    width: 87,
  },
  documentIcon: {
    overflow: "hidden",
  },
  iconlylightOutlinecalendarParent: {
    top: 20,
    left: 276,
    position: "absolute",
    justifyContent: "flex-end",
  },
  navigationIcon: {
    top: 821,
    height: 105,
  },
  miInformacinPersonal: {
    borderRadius: Border.br_31xl,
    flex: 1,
    height: 926,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default MiInformacinPersonal;
