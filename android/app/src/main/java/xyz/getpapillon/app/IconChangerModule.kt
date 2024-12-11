package xyz.getpapillon.app

import android.content.ComponentName
import android.content.pm.PackageManager
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class IconChangerModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

    override fun getName() {
      return "IconChanger"
    }

    @ReactMethod
    fun changeIcon(newAlias: String, oldAlias: String) {
        val packageManager = reactContext.packageManager

        // Désactiver l'ancien alias
        packageManager.setComponentEnabledSetting(
            ComponentName(reactContext, oldAlias),
            PackageManager.COMPONENT_ENABLED_STATE_DISABLED,
            PackageManager.DONT_KILL_APP
        )

        // Activer le nouvel alias
        packageManager.setComponentEnabledSetting(
            ComponentName(reactContext, newAlias),
            PackageManager.COMPONENT_ENABLED_STATE_ENABLED,
            PackageManager.DONT_KILL_APP
        )
    }
}
