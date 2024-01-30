import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Padding, Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const PERFILDELUSUARIOVISITADO1 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.perfilDelUsuarioVisitado, styles.iconLayout]}>
      <View
        style={[
          styles.perfilDelUsuarioVisitadoChild,
          styles.frameParent17ShadowBox,
        ]}
      />
      <View style={[styles.frameParent, styles.framePosition]}>
        <View style={[styles.frameGroup, styles.frameSpaceBlock]}>
          <View style={styles.opcionesDePersonalizacinParent}>
            <Text style={styles.relacinTypo}>Opciones de personalización</Text>
            <View style={[styles.frameContainer, styles.frameContainerFlexBox]}>
              <View style={styles.relacinParent}>
                <Text style={[styles.relacin, styles.relacinTypo]}>
                  Relación
                </Text>
                <Text style={[styles.familiar, styles.relacinTypo]}>
                  Familiar
                </Text>
              </View>
              <Image
                style={styles.vectorIcon}
                contentFit="cover"
                source={require("../assets/vector47.png")}
              />
            </View>
            <View style={[styles.frameContainer, styles.frameContainerFlexBox]}>
              <View style={styles.relacinParent}>
                <Text style={[styles.relacin, styles.relacinTypo]}>
                  Parentezco
                </Text>
                <Text style={[styles.familiar, styles.relacinTypo]}>
                  Primos
                </Text>
              </View>
              <Image
                style={styles.vectorIcon}
                contentFit="cover"
                source={require("../assets/vector47.png")}
              />
            </View>
            <View style={[styles.frameContainer, styles.frameContainerFlexBox]}>
              <View style={styles.relacinParent}>
                <Text style={[styles.relacin, styles.relacinTypo]}>Nivel</Text>
                <Text style={[styles.familiar, styles.relacinTypo]}>
                  Primer Nivel
                </Text>
              </View>
              <Image
                style={styles.vectorIcon}
                contentFit="cover"
                source={require("../assets/vector47.png")}
              />
            </View>
            <View style={[styles.frameContainer, styles.frameContainerFlexBox]}>
              <View style={styles.relacinParent}>
                <Text style={[styles.relacin, styles.relacinTypo]}>Sangre</Text>
                <Text style={[styles.familiar, styles.relacinTypo]}>
                  Materna
                </Text>
              </View>
              <Image
                style={styles.vectorIcon}
                contentFit="cover"
                source={require("../assets/vector47.png")}
              />
            </View>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require("../assets/line-78.png")}
            />
            <Text style={[styles.notificaciones, styles.relacinTypo]}>
              Notificaciones
            </Text>
            <View style={[styles.frameContainer, styles.frameContainerFlexBox]}>
              <View style={styles.relacinParent}>
                <Text
                  style={[styles.relacin, styles.relacinTypo]}
                >{`Permitir que Bruno reciba actualizaciones `}</Text>
                <Text style={[styles.familiar, styles.relacinTypo]}>
                  Activado
                </Text>
              </View>
              <Image
                style={styles.vectorIcon}
                contentFit="cover"
                source={require("../assets/vector47.png")}
              />
            </View>
            <View style={[styles.frameContainer, styles.frameContainerFlexBox]}>
              <View style={styles.relacinParent}>
                <Text style={[styles.relacin, styles.relacinTypo]}>
                  Activar notificaciones sobre el feed de Bruno
                </Text>
                <Text style={[styles.familiar, styles.relacinTypo]}>
                  Desactivado
                </Text>
              </View>
              <Image
                style={styles.vectorIcon}
                contentFit="cover"
                source={require("../assets/vector47.png")}
              />
            </View>
            <View style={[styles.frameContainer, styles.frameContainerFlexBox]}>
              <View style={styles.relacinParent}>
                <Text style={[styles.relacin, styles.relacinTypo]}>
                  Bloquear notificaciones de este usuario
                </Text>
                <Text style={[styles.familiar, styles.relacinTypo]}>
                  Desactivado
                </Text>
              </View>
              <Image
                style={styles.vectorIcon}
                contentFit="cover"
                source={require("../assets/vector47.png")}
              />
            </View>
            <View style={[styles.frameContainer, styles.frameContainerFlexBox]}>
              <View style={styles.relacinParent}>
                <Text style={[styles.relacin, styles.relacinTypo]}>
                  Bloquear notificaciones del usuario a este usuario
                </Text>
                <Text style={[styles.familiar, styles.relacinTypo]}>
                  Desactivado
                </Text>
              </View>
              <Image
                style={styles.vectorIcon}
                contentFit="cover"
                source={require("../assets/vector47.png")}
              />
            </View>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require("../assets/line-78.png")}
            />
            <Text style={[styles.notificaciones, styles.relacinTypo]}>
              Privacidad
            </Text>
            <View style={[styles.frameContainer, styles.frameContainerFlexBox]}>
              <View style={styles.relacinParent}>
                <Text style={[styles.relacin, styles.relacinTypo]}>
                  Permitir que Bruno visualice mi información
                </Text>
                <Text style={[styles.familiar, styles.relacinTypo]}>
                  Activado
                </Text>
              </View>
              <Image
                style={styles.vectorIcon}
                contentFit="cover"
                source={require("../assets/vector47.png")}
              />
            </View>
            <View style={[styles.frameContainer, styles.frameContainerFlexBox]}>
              <View style={styles.relacinParent}>
                <Text style={[styles.relacin, styles.relacinTypo]}>
                  Permitir que Bruno me etiquete en sus recuerdos
                </Text>
                <Text style={[styles.familiar, styles.relacinTypo]}>
                  Desactivado
                </Text>
              </View>
              <Image
                style={styles.vectorIcon}
                contentFit="cover"
                source={require("../assets/vector47.png")}
              />
            </View>
            <View style={[styles.frameContainer, styles.frameContainerFlexBox]}>
              <View style={styles.relacinParent}>
                <Text style={[styles.relacin, styles.relacinTypo]}>
                  Permitir que Bruno observe Mis Recuerdos
                </Text>
                <Text style={[styles.familiar, styles.relacinTypo]}>
                  Desactivado
                </Text>
              </View>
              <Image
                style={styles.vectorIcon}
                contentFit="cover"
                source={require("../assets/vector47.png")}
              />
            </View>
            <View style={[styles.frameContainer, styles.frameContainerFlexBox]}>
              <View style={styles.relacinParent}>
                <Text style={[styles.relacin, styles.relacinTypo]}>
                  Permitir que Bruno observe Mis Álbumes
                </Text>
                <Text style={[styles.familiar, styles.relacinTypo]}>
                  Desactivado
                </Text>
              </View>
              <Image
                style={styles.vectorIcon}
                contentFit="cover"
                source={require("../assets/vector47.png")}
              />
            </View>
            <View style={[styles.frameContainer, styles.frameContainerFlexBox]}>
              <View style={styles.relacinParent}>
                <Text style={[styles.relacin, styles.relacinTypo]}>
                  Permitir que Bruno visualice mis diarios familiares
                </Text>
                <Text style={[styles.familiar, styles.relacinTypo]}>
                  Desactivado
                </Text>
              </View>
              <Image
                style={styles.vectorIcon}
                contentFit="cover"
                source={require("../assets/vector47.png")}
              />
            </View>
            <View style={[styles.frameContainer, styles.frameContainerFlexBox]}>
              <View style={styles.relacinParent}>
                <Text
                  style={[styles.permitirQueBruno6, styles.relacinTypo]}
                >{`Permitir que Bruno visualice mi contenido en su 
calendario`}</Text>
                <Text style={[styles.familiar, styles.relacinTypo]}>
                  Desactivado
                </Text>
              </View>
              <Image
                style={styles.vectorIcon}
                contentFit="cover"
                source={require("../assets/vector46.png")}
              />
            </View>
            <View style={[styles.frameContainer, styles.frameContainerFlexBox]}>
              <View style={styles.relacinParent}>
                <Text style={[styles.relacin, styles.relacinTypo]}>
                  Permitir que Bruno me visualice en su árbol
                </Text>
                <Text style={[styles.familiar, styles.relacinTypo]}>
                  Desactivado
                </Text>
              </View>
              <Image
                style={styles.vectorIcon}
                contentFit="cover"
                source={require("../assets/vector47.png")}
              />
            </View>
            <View style={[styles.frameContainer, styles.frameContainerFlexBox]}>
              <View style={styles.relacinParent}>
                <Text style={[styles.relacin, styles.relacinTypo]}>
                  Permitir que los contactos de Bruno vean mi perfil
                </Text>
                <Text style={[styles.familiar, styles.relacinTypo]}>
                  Desactivado
                </Text>
              </View>
              <Image
                style={styles.vectorIcon}
                contentFit="cover"
                source={require("../assets/vector47.png")}
              />
            </View>
            <View style={[styles.frameContainer, styles.frameContainerFlexBox]}>
              <View style={styles.relacinParent}>
                <Text style={[styles.relacin, styles.relacinTypo]}>
                  Permitir visualizar mis logros y recompensas
                </Text>
                <Text style={[styles.familiar, styles.relacinTypo]}>
                  Desactivado
                </Text>
              </View>
              <Image
                style={styles.vectorIcon}
                contentFit="cover"
                source={require("../assets/vector47.png")}
              />
            </View>
            <View style={[styles.frameContainer, styles.frameContainerFlexBox]}>
              <View style={styles.relacinParent}>
                <Text style={[styles.relacin, styles.relacinTypo]}>
                  Permitir visualizar mi estado de salud
                </Text>
                <Text style={[styles.familiar, styles.relacinTypo]}>
                  Desactivado
                </Text>
              </View>
              <Image
                style={styles.vectorIcon}
                contentFit="cover"
                source={require("../assets/vector47.png")}
              />
            </View>
            <View style={styles.vectorParent}>
              <Image
                style={styles.vectorIcon18}
                contentFit="cover"
                source={require("../assets/vector48.png")}
              />
              <Text
                style={[styles.anunciarDefuncin, styles.ajustesDeBrunoTypo]}
              >
                Anunciar defunción
              </Text>
            </View>
            <View style={styles.vectorParent}>
              <Image
                style={styles.vectorIcon18}
                contentFit="cover"
                source={require("../assets/vector48.png")}
              />
              <Text
                style={[styles.anunciarDefuncin, styles.ajustesDeBrunoTypo]}
              >
                Desvincular este perfil del tree familiar
              </Text>
            </View>
          </View>
          <LinearGradient
            style={[styles.button, styles.buttonFlexBox]}
            locations={[0, 1]}
            colors={["#dee274", "#7ec18c"]}
          >
            <Text style={styles.signIn}>Guardar</Text>
          </LinearGradient>
          <View style={[styles.frameInner, styles.framePosition]} />
        </View>
        <View style={[styles.frameParent17, styles.frameParent17Position]}>
          <View style={styles.image6Parent}>
            <Image
              style={styles.image6Icon}
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
                style={styles.iconlylightOutlinecalendar}
                contentFit="cover"
                source={require("../assets/iconlylightoutlinecalendar4.png")}
              />
              <Image
                style={[styles.documentIcon, styles.documentIconLayout]}
                contentFit="cover"
                source={require("../assets/document6.png")}
              />
              <Image
                style={styles.documentIconLayout}
                contentFit="cover"
                source={require("../assets/iconlylightoutlinesetting6.png")}
              />
            </View>
          </View>
          <View style={[styles.backParent, styles.buttonFlexBox]}>
            <Pressable
              style={styles.iconlylightOutlinecalendar}
              onPress={() => navigation.navigate("PERFILDELUSUARIOVISITADO2")}
            >
              <Image
                style={[styles.icon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/back.png")}
              />
            </Pressable>
            <Text style={[styles.ajustesDeBruno, styles.ajustesDeBrunoTypo]}>
              Ajustes de Bruno Pham
            </Text>
          </View>
        </View>
      </View>
      <Image
        style={[styles.navigationIcon, styles.frameParent17Position]}
        contentFit="cover"
        source={require("../assets/navigation28.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  frameParent17ShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    top: 0,
  },
  framePosition: {
    left: 0,
    position: "absolute",
  },
  frameSpaceBlock: {
    paddingHorizontal: Padding.p_xl,
    backgroundColor: Color.white,
  },
  frameContainerFlexBox: {
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  relacinTypo: {
    textAlign: "left",
    fontWeight: "500",
    lineHeight: 19,
    fontFamily: FontFamily.lato,
    letterSpacing: 0,
    fontSize: FontSize.size_base,
  },
  ajustesDeBrunoTypo: {
    fontWeight: "700",
    marginLeft: 20,
    textAlign: "left",
    fontFamily: FontFamily.lato,
  },
  buttonFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  frameParent17Position: {
    left: "50%",
    marginLeft: -214,
    position: "absolute",
  },
  documentIconLayout: {
    marginLeft: 30,
    height: 24,
    width: 24,
  },
  perfilDelUsuarioVisitadoChild: {
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowRadius: 25,
    elevation: 25,
    height: 113,
    width: 428,
    left: 0,
    position: "absolute",
    backgroundColor: Color.white,
  },
  relacin: {
    color: Color.negro,
  },
  familiar: {
    color: Color.grisGeneral,
    marginTop: 10,
  },
  relacinParent: {
    width: 347,
  },
  vectorIcon: {
    width: 21,
    height: 21,
    marginLeft: 20,
  },
  frameContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  frameChild: {
    maxHeight: "100%",
    width: 388,
    marginTop: 20,
  },
  notificaciones: {
    marginTop: 20,
  },
  permitirQueBruno6: {
    color: Color.negro,
    width: 347,
  },
  vectorIcon18: {
    width: 22,
    height: 22,
  },
  anunciarDefuncin: {
    fontSize: FontSize.size_lg,
    lineHeight: 22,
    color: Color.primario1,
    letterSpacing: 0,
    fontWeight: "700",
  },
  vectorParent: {
    marginTop: 20,
    alignItems: "center",
    flexDirection: "row",
  },
  opcionesDePersonalizacinParent: {
    height: 1460,
    zIndex: 0,
  },
  signIn: {
    letterSpacing: 1,
    lineHeight: 24,
    color: Color.white,
    textAlign: "center",
    fontFamily: FontFamily.lato,
    fontSize: FontSize.size_base,
    flex: 1,
  },
  button: {
    top: 1502,
    borderRadius: Border.br_11xl,
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_sm,
    backgroundColor: Color.linearBoton,
    zIndex: 1,
    width: 388,
    left: 0,
    position: "absolute",
  },
  frameInner: {
    top: 1576,
    height: 102,
    zIndex: 2,
    position: "absolute",
    left: 0,
    backgroundColor: Color.white,
  },
  frameGroup: {
    paddingVertical: 112,
    zIndex: 0,
    flexDirection: "row",
  },
  image6Icon: {
    width: 87,
    height: 55,
  },
  iconlylightOutlinecalendar: {
    height: 24,
    width: 24,
  },
  documentIcon: {
    overflow: "hidden",
  },
  iconlylightOutlinecalendarParent: {
    width: 189,
    marginLeft: 112,
  },
  image6Parent: {
    alignItems: "center",
    flexDirection: "row",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  ajustesDeBruno: {
    fontSize: FontSize.size_5xl,
    color: Color.negro,
  },
  backParent: {
    marginTop: 6,
  },
  frameParent17: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 4,
    elevation: 4,
    paddingBottom: Padding.p_xl,
    zIndex: 1,
    paddingHorizontal: Padding.p_xl,
    backgroundColor: Color.white,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    top: 0,
  },
  frameParent: {
    flexDirection: "row",
    top: 0,
    left: 0,
    position: "absolute",
  },
  navigationIcon: {
    top: 821,
    height: 105,
    width: 428,
  },
  perfilDelUsuarioVisitado: {
    borderRadius: Border.br_31xl,
    height: 926,
    overflow: "hidden",
    flex: 1,
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default PERFILDELUSUARIOVISITADO1;
