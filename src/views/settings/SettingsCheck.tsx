import React from "react";
import { Text, ScrollView, View, StyleSheet, Switch } from "react-native";
import { useTheme } from "@react-navigation/native";
import type { Screen } from "@/router/helpers/types";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { NativeIcon, NativeIconGradient, NativeItem, NativeList, NativeListHeader, NativeText } from "@/components/Global/NativeComponents";
import { ArrowUpNarrowWide, BookDashed, Brain, CheckSquare, Search } from "lucide-react-native";
import { useCurrentAccount } from "@/stores/account";

const SettingsCheck: Screen<"SettingsCheck"> = ({ navigation }) => {
  const theme = useTheme();
  const { colors } = theme;
  const insets = useSafeAreaInsets();
  const account = useCurrentAccount(store => store.account);
  const mutateProperty = useCurrentAccount(store => store.mutateProperty);

  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
      }}
    >
      <NativeListHeader label="Laisser activé" />
      <NativeList>
        <NativeItem
          trailing={
            <Switch
              value={account?.personalization?.KeepCheckActivated ?? false}
              onValueChange={(value) => {
                mutateProperty("personalization", { KeepCheckActivated: value });
                console.log(value);
                console.log(account?.personalization.KeepCheckActivated);
              }}
            />
          }
          leading={
            <NativeIconGradient
              icon={<CheckSquare />}
              colors={["#04ACDC", "#6FE3CD"]}
            />
          }
        >
          <NativeText variant="title">
            Devoirs non-faits
          </NativeText>
          <NativeText variant="subtitle">
            Activer par défaut le fait d'afficher uniquement les devoirs non-faits
          </NativeText>
        </NativeItem>
        <NativeItem
          trailing={
            <Switch
              value={account?.personalization?.KeepCheckVisible ?? false}
              onValueChange={(value) => mutateProperty("personalization", { KeepCheckVisible: value })}
            />
          }
          leading={
            <NativeIconGradient
              icon={<Search />}
              colors={["#FFD700", "#FF8C00"]}
            />
          }
        >
          <NativeText variant="title">
            Garder visible
          </NativeText>
          <NativeText variant="subtitle">
            Garder visible dans la barre du haut a coté du champ de recherche
          </NativeText>
        </NativeItem>
      </NativeList>
    </ScrollView>
  );
};



export default SettingsCheck;
